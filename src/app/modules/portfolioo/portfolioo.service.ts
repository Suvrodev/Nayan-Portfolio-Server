import AppError from "../../errors/AppError";
import { TPortfolio } from "./portfolioo.interface";
import { PortfolioModel } from "./portfolioo.model";

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
const updatPortfolioIntoDB = async (
  portfolioId: string,
  payload: TPortfolio
) => {
  console.log("Portfolio id: ", portfolioId);
  console.log("payload in portfolio", payload);

  const result = await PortfolioModel.findByIdAndUpdate(portfolioId, payload, {
    new: true,
  });
  return result;
};

export const portfolioServices = {
  addPortfolioIntoDB,
  getAllPortfolioFromDB,
  getSpecificPortfolioFromDB,
  deletePortfolioFromDB,
  updatPortfolioIntoDB,
};
