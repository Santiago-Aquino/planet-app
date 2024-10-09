import PlanetModel from "../../models/planet.model";
import { Order } from "../../../types/enums/order.enum";
import { IPlanetEntity } from "../../../types/planet.type";
import { SortOrder } from "mongoose";
import { OrderField } from "../../../types/enums/order-field.enum";

export default class PlanetService {

  getAll = async (fieldQuery?: OrderField, orderQuery?: Order, page?: number, limit?: number) => {
    try {
      const order = !orderQuery || orderQuery === Order.ASC ? Order.ASC : Order.DESC;
      const field = fieldQuery ? fieldQuery : '';

      const option: { [key: string]: SortOrder } = {};

      if (field) {
        option[field] = order;
      };

      const {
        docs,
        hasNextPage,
        hasPrevPage,
        nextPage,
        prevPage,
        totalPages
      } = await PlanetModel.paginate({}, {page, limit, lean: true, sort: option});

      return {
        planets: docs,
        hasNextPage,
        hasPrevPage,
        nextPage,
        prevPage,
        totalPages
      }
    }
    catch (err) {
      throw new Error(`Error getting planets: ${err}`);
    }
  };

  getOne = async (id: string) => {
    try {
      const cart = await PlanetModel.findOne({ _id: id });
      return cart;
    }
    catch (err) {
      throw new Error(`Error getting planet: ${err}`);
    }
  };

  create = async (planet: IPlanetEntity) => {
    try {
      const newPlanet = await PlanetModel.create(planet);
      return newPlanet;
    }
    catch (err) {
      throw new Error(`Error create planet: ${err}`);
    }
  };

  update = async (id: string, planet: IPlanetEntity) => {
    try {
      const result = await PlanetModel.findOneAndUpdate({ _id: id }, { $set: planet }, { new: true });
      return result;
    }
    catch (err) {
      throw new Error(`Error update planet: ${err}`);
    }
  };

  delete = async (id: string) => {
    try {
      const result = await PlanetModel.findOneAndDelete({ _id: id });
      return result;
    }
    catch (err) {
      throw new Error(`Error update planet: ${err}`);
    }
  };
}