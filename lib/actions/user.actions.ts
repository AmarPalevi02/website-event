"use server"

import { conectToMongoose } from "../database"

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import User from "../database/models/user.model"

export const createUser = async (user: CreateUserParams) => {
   try {
      await conectToMongoose()

      const newUser = await User.create(user)
      return JSON.parse(JSON.stringify(newUser))
      
   } catch (error) {
      handleError(error)
   }
}

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
   try {

   } catch (error) {

   }
}