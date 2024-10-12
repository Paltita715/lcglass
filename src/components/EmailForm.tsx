import { useState } from "react"
import { render } from "@react-email/components"
import SampleEmail from "./SampleEmail"

const EmailForm = () => {
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResetKey, setFormResetKey] = useState(0)

  const generateEmailContent = async (
    asunto: string,
    nombre: string,
    correo: string,
    telefono: string,
    comentario: string,
    format: "html" | "text"
  ) => {
    return await render(
      <SampleEmail
        asunto={asunto}
        nombre={nombre}
        correo={correo}
        telefono={telefono}
        comentario={comentario}
      />,
      format === "html" ? { pretty: true } : { plainText: true }
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    const { nombre, telefono, correo, asunto, comentario } =
      Object.fromEntries(formData)

    try {
      const [finalHtml, finalTxt] = await Promise.all([
        generateEmailContent(
          asunto as string,
          nombre as string,
          correo as string,
          telefono as string,
          comentario as string,
          "html"
        ),
        generateEmailContent(
          asunto as string,
          nombre as string,
          correo as string,
          telefono as string,
          comentario as string,
          "text"
        ),
      ])

      await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${nombre}<noreply@lcglassysoluciones.com>`,
          to: "lcglassysoluciones@gmail.com",
          subject: asunto,
          html: finalHtml,
          text: finalTxt,
        }),
      })

      setError(null)
      setFormResetKey((prev) => prev + 1)
    } catch (e) {
      setError(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      key={formResetKey}
      className="col-span-2 sm:grid grid-cols-2 p-4 rounded-xl gap-2"
      onSubmit={handleSubmit}
    >
      {[
        {
          label: "Nombre",
          id: "nombre",
          type: "text",
          placeholder: "Luis Zabaleta Pacora",
        },
        {
          label: "Teléfono",
          id: "telefono",
          type: "tel",
          placeholder: "936 036 026",
        },
        {
          label: "Correo",
          id: "correo",
          type: "email",
          placeholder: "nombre@ejemplo.com",
        },
        { label: "Asunto", id: "asunto", type: "text", placeholder: "" },
      ].map(({ label, id, type, placeholder }) => (
        <div key={id}>
          <label className="block font-semibold" htmlFor={id}>
            {label}
          </label>
          <input
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-linear focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow;"
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            required
          />
        </div>
      ))}
      <div className="col-span-2">
        <label className="block font-semibold" htmlFor="comentario">
          Comentario
        </label>
        <textarea
          className="min-h-52 w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-linear focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow;"
          id="comentario"
          name="comentario"
          required
        ></textarea>
      </div>
      {error && <div className="col-span-2 text-red-500 mt-2">{error}</div>}
      <button
        className="bg-primary col-span-2 w-fit px-4 py-2 text-white rounded text-xl ml-auto"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  )
}

export default EmailForm
