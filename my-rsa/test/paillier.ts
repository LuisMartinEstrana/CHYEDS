import * as bcu from 'bigint-crypto-utils'
describe('Pailler', function () {
  this.timeout(20000)
  const tests = 16
  const numbers: Array<bigint> = []
  const ciphertexts: Array<bigint> = []
  describe('encrypt/decrypt', function () {
    it('should work', async function () {
      const keypair = await _pkg.generateKeysP()
      let testPassed = true
      for (let i = 0; i < tests; i++) {
        numbers[i] = bcu.randBetween(keypair.publicKey.n)
        ciphertexts[i] = keypair.publicKey.encrypt(numbers[i])
        const decrypted = keypair.privateKey.decrypt(ciphertexts[i])
        if (numbers[i] !== decrypted) {
          testPassed = false
          break
        }
      }
      chai.expect(testPassed).equals(true)
    })
  })
})