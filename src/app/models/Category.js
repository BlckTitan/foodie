import { mongoose} from "mongoose";
import {isAlpha} from 'validator';

const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: false},
    // city: { type: String, required: true, validate: [isAlpha, 'City must be alphabets']},
    // region: { type: String, required: true, validate: [isAlpha, 'Region must be alphabets']},
    // street: { type: String, required: true, validate: [isAlpha, 'Street must be alphabets']},

}, {timestamps: true});

export const Category = mongoose.models?.Category || mongoose.model('Category', CategorySchema);