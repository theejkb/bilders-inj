export default function Form2() {
  return (
    <form
      method='POST'
      action='https://script.google.com/macros/CA-MARCHE-PAS-WESH/exec'
    >
      <label>Quel services vous proposer ?</label>
      <input name='Services' type='text' placeholder='Art, développement, community...' required />
      <label>Quel mission avez vous déjà effectué dans le web3 et pour quel projet ? </label>
      <input name='Mission' type='text' placeholder='Project web3, roles, missions...' required />
      <label>Quelle salaire demandez vous ?</label>
      <input name='Salaire' type='text' placeholder='Tranche de salaire' required />
      <input name='Twitter' type='text' placeholder='Votre liens twitter' required />
      <input name='Discord' type='text' placeholder='Votre ID Discord' required />
      <button type='submit'>Send</button>
    </form>
  )
}
