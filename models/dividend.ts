//This handles the schema for the dividend

//Libraries -->
import {Schema, model, Types, models } from "mongoose";
import { IDividendStatus, IDividendStatusModel } from "@/config/interfaces";

//Commencing the app

//This is the schema for the dividend database
const dividendSchema = new Schema<IDividendStatus, IDividendStatusModel>(
  {
    paymentDate: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    status: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

/**
 * @notice Static create dividend
 * @param inquiry The details as required by IInquiry
 * @returns The created inquiry
 */
dividendSchema.statics.createDividend = async function ( dividend: IDividendStatus ) {

  //Adding the inquiry to the database before sending it to the admin
  const dividend_ = await this.create(dividend);

  //A function should be created that sends the inquiry to the admin

  return dividend_;
};

/**
 * @notice Static get all inquiries
 * @returns All inquiries
 */
dividendSchema.statics.getAllDividends = async function () {
  const dividend = await this.find({}).sort({ createdAt: -1 });
  return dividend;
};

/**
 * @notice Static get inquiry
 * @returns The inquiry
 */
dividendSchema.statics.getDividendByDate = async function (paymentDate: string) {
  const dividend = await this.find({ paymentDate: paymentDate })

  if (!dividend || dividend.length === 0) {
    throw new Error("Dividend doesn't exist");
  } else {
    return dividend;
  }
};

export const Dividend: IDividendStatusModel = (models.Dividend || model<IDividendStatus, IDividendStatusModel>("Dividend", dividendSchema)) as IDividendStatusModel;
