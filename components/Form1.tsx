import { FormName, useSubmitForm } from '../hooks/use-submit-form'

export default function Form1() {
  const { isSubmitting, handleSubmit } = useSubmitForm(FormName.NEED_SERVICE)

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        {
          "Whether you're a freelancer or a project founder, our DM are open if you want branding that sets you apart from your competitors"
        }
      </h3>
      <label htmlFor="service">Besoin d’un service ?</label>
      <input
        name="service"
        type="text"
        placeholder="Art, développement, community..."
        required
      />
      <label htmlFor="description">
        Décrivez nous votre projet rapidement et votre demande.
      </label>
      <input
        name="description"
        type="text"
        placeholder="Details supplémentaires"
        required
      />
      <input
        name="twitter"
        type="text"
        placeholder="Votre liens twitter"
        required
      />
      <input
        name="discord"
        type="text"
        placeholder="Votre ID Discord"
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending ..." : "Send"}
      </button>
    </form>
  )
}
