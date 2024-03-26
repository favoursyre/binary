//This handles the schema for account

//Libraries -->
import {Schema, model, Types, models } from "mongoose";
import { IAccount, IAccountModel, ITransaction, IVerification, IReferralInfo, IWalletInfo, IFileAttachment } from "@/config/interfaces";

//Commencing the app
const ObjectId = Types.ObjectId

//This is the schema for the inquiry database
const accountSchema = new Schema<IAccount, IAccountModel>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    emailAddress: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    },
    investorType: {
        type: String,
        required: true,
        trim: true
    },
    referrerId: {
        type: String,
        trim: true
    },
    verification: {
        status: {
            type: Boolean
        },
        document: {
            type: String,
            trim: true
        },
        file: {
          name: {
            type: String,
            trim: true
          },
          url: {
            type: String,
            trim: true
          }, 
          width: {
            type: Number
          },
          height: {
            type: Number
          }
        }
    },
    referral: {
        referralId: {
            type: String,
            trim: true
        },
        referralLink: {
            type: String,
            trim: true
        },
        numberOfReferrees: { 
            type: Number
        },
    },
    wallet: {
      mnemonic: {
        type: String,
        trim: true
    },
        privateKey: {
            type: String,
            trim: true
        },
        publicKey: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        }
    },
    profileImage: {
      name: {
        type: String,
        trim: true
      },
      url: {
        type: String,
        trim: true
      }, 
      width: {
        type: Number
      },
      height: {
        type: Number
      }
    },
    transactions: [{
      txId: { 
        type: String 
      },
      amount: { 
        type: Number
      },
      currency: { 
        type: String 
      },
      status: { 
        type: String
      },
      description: {
        type: String
      },
      section: { 
        type: String
      },
      sender: { 
        type: String
      },
      recipient: {
        type: String
      },
      date: {
        type: String
      },
      time: { 
        type: String
      }
    }]
  },
  { timestamps: true }
);

/**
 * @notice Static create aaccount
 * @param inquiry The details as required by IAccount
 * @returns The created account
 */
accountSchema.statics.registerAccount = async function ( account: IAccount ) {

  //Creating the account
  const { emailAddress, referrerId } = account
  //console.log("Email server: ", emailAddress)
  const exist = await this.find({ emailAddress: emailAddress })
  //console.log("Exist: ", exist)
  //let id
  //Checking if an account exist with the given email
  if (exist.length === 0) {
    //Checking if an account exist with the given referrer id given its not 0
    if (referrerId !== "0") {
      try {
        const id: Types.ObjectId = new ObjectId(referrerId)
        const refer = await this.find({ _id: referrerId })
        if (refer.length === 0) {
          throw new Error(`
            Invalid Referrer ID
            - Leave the referrer Id blank if no one referred you or
            - Put the correct Referral ID of the the person that referred you
          `)
        }
      } catch {
        throw new Error(`
          Invalid Referrer ID
          - Leave the referrer Id blank if no one referred you
          - Put the correct Referral ID of the the person that referred you
        `)
      }
    } 
    const account_ = await this.create({ ...account });
    return account_
  } else {
    throw new Error(`This email is already registered, try logging in instead`)
  }
};

/**
 * @notice Static get all accounts
 * @returns All accounts
 */
accountSchema.statics.getAllAccounts = async function () {
  console.log("Geting accounts")
  const account = await this.find({}).sort({ createdAt: -1 });
  return account;
};

/**
 * @notice Static login into account
 * @returns The logged in account
 */
accountSchema.statics.loginAccount = async function (emailAddress: string, password: string) {

  //Checking if an account has the email
  const account: Array<IAccount> = await this.find({ emailAddress: emailAddress })

  if (account.length === 0) {
    throw new Error("This email isn't registered with us, try registering instead")
  } else {

    ///Checking if the password match
    const { password: password_ } = account[0]
    if (password_ !== password) {
      throw new Error("Incorrect password")
    } else {

      //Checking if the acocunt is verified
      // if (account[0].verification === {}) {
      //   throw new Error("Verify your email to access your account")
      // } else {
      //console.log('veri stat: ', Object.values(account[0].verification))
        return account
    //}
    }
  }
}

/**
 * @notice Static verify account
 * @returns The verified account
 */
accountSchema.statics.verifyAccount = async function (id: string, verification: IVerification): Promise<IAccount | null> {

  //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  console.log("Checking: ", verification)
  //Checking if an account has the given id and update
  const account = await this.findOneAndUpdate( { _id: id },{ verification: { ...verification } } );
  console.log("Acc Veri: ", account)
  //Compare the password with the password in the account if it exists
  return account
}

/**
 * @notice Static create referral info
 * @returns The account
 */
accountSchema.statics.createReferralInfo = async function (id: string, referral: IReferralInfo) {

  //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //Checking if an account has the given id and update
  const account = await this.findOneAndUpdate( { _id: id },{ referral: { ...referral } } );

  //Compare the password with the password in the account if it exists
  return account
}

/**
 * @notice Static update referral info
 * @returns The account
 */
accountSchema.statics.updateReferralInfo = async function (id: string, referral: IReferralInfo) {

  //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //Checking if an account has the given id and update
  console.log("Info: ", referral)
  const account = await this.findOneAndUpdate( { _id: id },{ referral: { ...referral } } );

  //Compare the password with the password in the account if it exists
  return account
}

/**
 * @notice Static create wallet info
 * @returns The account
 */
accountSchema.statics.createWalletInfo = async function (id: string, wallet: IWalletInfo) {

  //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //Checking if an account has the given id and update
  const account = await this.findOneAndUpdate( { _id: id },{ wallet: { ...wallet } } );

  //Compare the password with the password in the account if it exists
  return account
}

/**
 * @notice Static reset password
 * @returns The account
 */
accountSchema.statics.resetPassword = async function (emailAddress: string, password: string) {

  //Checking if an account has the email
  const account = await this.findOneAndUpdate( { emailAddress: emailAddress },{ password } );

  return account
}

/**
 * @notice Static change password
 * @returns The account
 */
accountSchema.statics.changePassword = async function (emailAddress: string, currentPassword: string, newPassword: string) {
  let account: Array<IAccount> | null
  //Checking if an account has the email
  account = await this.find({ emailAddress: emailAddress })

  if (account.length === 0) {
    return "This email isn't registered with us"
  } else {

    ///Checking if the password match
    const { password: password_ } = account[0]
    if (password_ !== currentPassword) {
      return "Incorrect password"
    } else {
      account = await this.findOneAndUpdate( { emailAddress: emailAddress },{ password: newPassword } );
      return account
    }
  }
}

/**
 * @notice Static change profile picture
 * @returns The account
 */
accountSchema.statics.changeProfileImage = async function (id: string, profileImage: IFileAttachment) {

  const account = await this.findOneAndUpdate( { _id: id },{ profileImage } );

  return account
}

/**
 * @notice Static create transaction
 * @returns The account
 */
accountSchema.statics.createTransaction = async function (id: string, transaction: ITransaction) {

  //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //Checking if an account has the given id and update
  const account = await this.findOneAndUpdate( { _id: id },{ $push: { transactions: { ...transaction } }}, { new: true } );

  //Compare the password with the password in the account if it exists
  return account
}

/**
 * @notice Static update transaction
 * @returns The account
 */
accountSchema.statics.updateTransaction = async function (id: string, txId: string, transaction: ITransaction) {

  //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //Checking if an account has the given id and update
  const account = await this.findOneAndUpdate( 
    { 
      _id: id,
      "transactions.txId": txId 
    },
    { 
      $set: { "transactions.$": { ...transaction } }
    }, { new: true } );

  
  if (!account) {
    throw new Error("Account or Transaction not found");
  } else {
    return account
  }
}

/**
 * @notice Static get all accounts
 * @returns All accounts
 */
accountSchema.statics.getAllAccounts = async function () {
  const accounts = await this.find({}).sort({ createdAt: -1 });
  return accounts;
};

/**
 * @notice Static get account by id
 * @returns The account
 */
accountSchema.statics.getAccountById = async function (id: string): Promise<Array<IAccount>> {
   //Validation of args
   if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  const account: Array<IAccount> = await this.find({ _id: id })

  if (!account || account.length === 0) {
    throw new Error("Account doesn't exist");
  } else {
    return account
  }
}

/**
 * @notice Static get account by email
 * @returns The account
 */
accountSchema.statics.getAccountByEmail = async function (emailAddress: string) {

 const account = await this.find({ emailAddress: emailAddress })

 if (account === undefined || account.length === 0) {
   throw new Error("This email isn't registered with us, try registering instead");
 } else {
   return account
 }
}

/**
 * @notice Static get all transactions of an account
 * @returns The transactions
 */
accountSchema.statics.getAllTransactions = async function (id: string) {
  //Validation of args
  if (!Types.ObjectId.isValid(id)) {
   throw Error("Id is invalid");
 }

 const account = await this.find({ _id: id })

 if (!account || account.length === 0) {
   throw new Error("Account doesn't exist");
 } else {
  const { transactions } = account[0] 
   return transactions
 }
}

/**
 * @notice Static delete account
 * @param id The id of the account to be deleted
 * @returns The deleted account
 */
accountSchema.statics.deleteAccount = async function (id: string) {
  //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  //This deletes the quote from the database
  const delete_ = await this.findOneAndDelete({ _id: id });
  return delete_;
}

export const Account = (models.Account || model<IAccount, IAccountModel>("Account", accountSchema)) as IAccountModel;

//export default Account
