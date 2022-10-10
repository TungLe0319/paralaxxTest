import { Auth0Provider } from '@bcwdev/auth0provider';
import BaseController from '../utils/BaseController.js';

export class exampleController extends BaseController {
  constructor() {
    super('/api/example');
    this.router
      .get('', this.getAll)
      .get('/:Id', this.getById)
      //NOTE MiddleWare Here ORDER MATTERS
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:Id', this.edit)
      .delete('/:Id', this.remove);
      /*  the '/:Id' are magicVariable words that must Match the req.params.Id in the below edit and remove and get by Id async functions.*/
  }
  async getAll(req, res, next) {
    try {
// const example = await exampleService.get()
     // res.send(example);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      //  const example = await exampleService.getById(req.params.Id)
      // res.send(example);
    } catch (error) {
      next(error);
    }
  }


  /**
   * req.body is similar to formData
   * req.body.creatorId = req.userInfo.id <--Forces them to be who they say they are
   */
  async create(req, res, next) {
    try {
      // const PlaceHolder = await Service.create(req.body)
      // res.send(PlaceHolder)
    } catch (error) {
      next(error);
    }
  }

  /**
   * usually will have 3 params req.body, req.userInfo, req.params.id <--this id name depends on what you it up top in your put request
   */
  async edit(req, res, next) {
    try {
      //  const PlaceHolder = await PlaceHolderService.edit(req.body, req.userInfo,req.params.Id)
      // res.send(PlaceHolder);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      // await Service.remove(req.params.Id, req.userInfo)
      //res.send('Successfully Removed')
    } catch (error) {
      next(error);
    }
  }
}
