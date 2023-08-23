import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { fetchReviewsAction, postReview } from '../api-actions';
import { ReviewsData } from '../../types/reviews-data';

const initialState: ReviewsData = {
  reviews: [],
  fetchingStatusReviews: RequestStatus.Unsent,
  sendingStatusReview: RequestStatus.Unsent,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.fetchingStatusReviews = RequestStatus.Pending;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.fetchingStatusReviews = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.fetchingStatusReviews = RequestStatus.Error;
      })
      .addCase(postReview.pending, (state) => {
        state.sendingStatusReview = RequestStatus.Pending;
      })
      .addCase(postReview.fulfilled, (state) => {
        state.sendingStatusReview = RequestStatus.Success;
      })
      .addCase(postReview.rejected, (state) => {
        state.sendingStatusReview = RequestStatus.Error;
      });
  }
});
