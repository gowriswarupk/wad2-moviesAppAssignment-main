import express from 'express';
import { tvs, tvReviews, tvDetails } from './tvsData';
import uniqid from 'uniqid'
import tvModel from './tvModel';
import asyncHandler from 'express-async-handler';
import {
    getUpcomingTvs
  } from '../tmdb-api';
  

const router = express.Router(); 

router.get('/', asyncHandler(async (req, res) => {
  const tvs = await tvModel.find();
  res.status(200).json(tvs);

    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // const totalDocumentsPromise = movieModel.estimatedDocumentCount(); //Kick off async calls
    // const moviesPromise = movieModel.find().limit(limit).skip((page - 1) * limit);

    // const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    // const movies = await moviesPromise;

    // const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: movies };//construct return Object and insert into response object

    // res.status(200).json(returnObject);
}));



// Get tv details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tv = await tvModel.findByTVDBId(id);
    if (tv) {
        res.status(200).json(tv);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get tv reviews
router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (tvReviews.id == id) {
        res.status(200).json(tvReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

// Get tv details
router.get('/:id/details', (req, res) => {
    const id = parseInt(req.params.id);
    // find detils in list
    if (tvDetails.id == id) {
        res.status(200).json(tvDetails);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

//Post a tv review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (tvReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        tvReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingTvs = await getUpcomingTvs();
    res.status(200).json(upcomingTvs);
  }));

export default router;
