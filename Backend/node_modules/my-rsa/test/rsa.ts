describe('RSA', function () {
  this.timeout(20000)
  const inputs = [145436436365713573571n, 18925679126457912549723547912354125347921354978586463n]
  for (const input of inputs) {
    describe('encrypt/decrypt', function () {
      it('should work', async function () {
        const keypair = await _pkg.generateKeys()
        const ciphertext = keypair.publicKey.encrypt(input)
        const decrypted = keypair.privateKey.decrypt(ciphertext)
        chai.expect(decrypted).to.equal(input)
      })
    })
  }
  for (const input of inputs) {
    describe('sign/verify', function () {
      it('works', async function () {
        const keypair = await _pkg.generateKeys()
        const sign = keypair.privateKey.sign(input)
        const verify = keypair.publicKey.verify(sign)
        chai.expect(verify).to.equal(input)
      })
    })
  }
})
