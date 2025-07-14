import AppError from "../../errors/AppError";
import { TPortfolio } from "./portfolio.interface";
import { PortfolioModel } from "./portfolio.model";

///Create Portfolio into db
const addPortfolioIntoDB = async (payload: TPortfolio) => {
  console.log("Portfolio Payload: ", payload);

  const result = await PortfolioModel.create(payload);
  console.log("Portfolio Result: ", result);
  return result;
};

//Get All Portfolio from DB
const getAllPortfolioFromDB = async () => {
  const result = await PortfolioModel.find()
    .sort({
      order: 1,
    })
    .select("image title category");
  return result;
};

//Get Specific Portfolio from DB
const getSpecificPortfolioFromDB = async (title: string) => {
  const result = await PortfolioModel.findOne({ title: title });
  return result;
};

//Delete Portfolio from DB
const deletePortfolioFromDB = async (portfolioId: string) => {
  const result = await PortfolioModel.deleteOne({ _id: portfolioId });
  return result;
};

//Update Portfolio
const updatPortfolioIntoDB = async (serviceId: string, payload: TPortfolio) => {
  console.log("User Id in service: ", serviceId);
  console.log("payload in service", payload);

  const result = await PortfolioModel.updateOne({ _id: serviceId }, payload, {
    new: true,
  });
  return result;
};

export const portfolioService = {
  addPortfolioIntoDB,
  getAllPortfolioFromDB,
  getSpecificPortfolioFromDB,
  deletePortfolioFromDB,
  updatPortfolioIntoDB,
};
