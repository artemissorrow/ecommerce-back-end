const router = require('express').Router()
const { Category, Product } = require('../../models')

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
})

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
})

router.post('/', async (req, res) => {
  try {
    const catData = await Category.create(req.body)
    res.status(200).json(catData)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!catData) {
      res.status(404).json({ message: 'No category with this id.' })
      return
    }
    res.status(200).json(catData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catData = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!catData) {
      res.status(404).json({ message: 'No category with this id.'})
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router
