import { FormName, useSubmitForm } from '../hooks/use-submit-form'

export default function Form2() {
  const { isSubmitting, handleSubmit } = useSubmitForm(FormName.OFFER_SERVICE)

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="service">Quel services vous proposer ?</label>
      <input
        name="service"
        type="text"
        placeholder="Art, développement, community..."
        required
      />
      <label htmlFor="mission">
        Quel mission avez vous déjà effectué dans le web3 et pour quel projet ?{' '}
      </label>
      <input
        name="mission"
        type="text"
        placeholder="Project web3, roles, missions..."
        required
      />
      <label htmlFor="salaire">Quelle salaire demandez vous ?</label>
      <input
        name="salaire"
        type="text"
        placeholder="Tranche de salaire"
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
