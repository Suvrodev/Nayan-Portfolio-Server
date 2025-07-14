import { NextFunction, Request, RequestHandler, Response } from "express";
import { portfolioService } from "./portfolio.service";

///Add Portfolio
const addPortfolio: RequestHandler = async (req, res, next) => {
  try {
    const portfolioData = req.body;
    const result = await portfolioService.addPortfolioIntoDB(portfolioData);
    res.status(201).json({
      success: true,
      message: "Portfolio Added successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Get All Portfolio
const getAllPortfolio: RequestHandler = async (req, res, next) => {
  try {
    const result = await portfolioService.getAllPortfolioFromDB();
    res.status(201).json({
      success: true,
      message: "Portfolio Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific Portfolio
const getSpecificPortfolio: RequestHandler = async (req, res, next) => {
  try {
    const portfolioTitle = req?.params?.portfolioTitle;
    console.log("------------------------");
    console.log("Portfolio Title: ", portfolioTitle);
    const result = await portfolioService.getSpecificPortfolioFromDB(
      portfolioTitle
    );
    console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Portfolio Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Portfolio
const deletePortfolio: RequestHandler = async (req, res, next) => {
  try {
    const portfolioId = req?.params?.portfolioId;
    console.log("Portfolio ID: ", portfolioId);
    const result = await portfolioService.deletePortfolioFromDB(portfolioId);
    console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Portfolio Deleted successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Update Portfolio
const updatePortfolio: RequestHandler = async (req, res, next) => {
  try {
    const portfolioId = req.params.serviceId;
    const portfolio = req.body;

    const result = await portfolioService.updatPortfolioIntoDB(
      portfolioId,
      portfolio
    );

    //Send Response
    res.status(200).json({
      message: "Portfolio updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PortfolioController = {
  addPortfolio,
  getAllPortfolio,
  getSpecificPortfolio,
  deletePortfolio,
  updatePortfolio,
};
