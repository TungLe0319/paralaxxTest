import { BadRequest, Forbidden } from '@bcwdev/auth0provider/lib/Errors.js';
import { dbContext } from '../db/DbContext.js';

class ExampleService {
  //don't forget to .populate or to return

  async getAll() {}

  //Id is req.params.id
  //Bad Request if Invalid Id
  //don't forget to populate
  //Example: const event = await dbContext.Events.findById(id).populate('creator','name picture')
  async getById(id) {
    //Don't forget return
  }

  async create() {
    //Drop down one line when trying to .populate
  }

  // Grab target by It's id
  //Example: const event= await this.getEventById(id)
  //Do Checks: If userInfo matches creator, If Bad Id
  //await example.save()
  //return example
  /**
   *
   * @param {any} id
   */
  async edit(id) {

  }






  /**
   *
   * @param {any} id  req.params.id  / ID of target object that I want to Delete
   * @param {any} userInfo  req.userInfo
   */
  async deleteExample(id, userInfo) {
    /**
    * EXAMPLE:
    * const EVENT = await this.getEventById(id)
    * if (!example) {throw new BadRequest('Invalid example Id')} 
    * if (userInfo.id != EVENT.creatorId.toString()) {throw new Forbidden("example")}
    * await event.save()
    * return EVENT
    */
  }
}
export const exampleservice = new ExampleService();

//Do not forget to fill out schemas in Dbcontext.js
