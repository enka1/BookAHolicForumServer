import mongoose from "mongoose";
import {CommentModel} from "./";

const PostSchema = new mongoose.Schema({
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		required: true
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	],
	like: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	],
	love: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	],
	dislike: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	]
});
PostSchema.pre("remove", function (next) {
	CommentModel.deleteMany({post: this._id});
	next();
});
export default mongoose.model("Post", PostSchema);
