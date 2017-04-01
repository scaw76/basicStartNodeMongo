var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('<mongolab link goes here>, ['item']);

// READ
// --Get All Items
router.get('/items', function(req,res,next){
	db.items.find(function(err, items){
		if(err){
			res.send(err);
		}
		res.json(items);
	})
});
// --Get One Item
router.get('/item/:id', function(req,res,next){
	db.items.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, item){
		if(err){
			res.send(err);
		}
		res.json(item);
	})
});
// Create item
router.post('/items', function(req,res,next){
	var item = req.body;
	if(!item.title){
		res.status(400);
		res.json({
			"error": "bad data"
		});
	}else{
		db.items.save(item, function(err, item){
			if(err){
				res.send(err);
			}
			res.json(item);
		});
	}
});
// Update One item
router.put('/item/:id', function(req,res,next){
	var item = req.body;
	var upditem = {};
	if(item.title){
		upditem.title = item.title;
	}
	if(!upditem){
		res.status(400);
		res.json({
			"error": "bad data"
		});
	}else{
		db.items.update({_id: mongojs.ObjectId(req.params.id)}, upditem, {}, function(err, item){
			if(err){
				res.send(err);
			}
			res.json(item);
		});
	}
});
// Destroy One item
router.delete('/item/:id', function(req,res,next){
	db.items.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, item){
		if(err){
			res.send(err);
		}
		res.json(item);
	})
});


module.exports = router;