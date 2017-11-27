import request from 'supertest'
import { app as mock } from '../../src/app'

describe('The version controller', () => {
    it('should return a 200 statuscode if ok', (done) => {
        request(mock)
            .get('/version')
            .expect(200)
            .end((err, res) => {
                if (err) throw new Error(err)
                done()
            })
    })
})