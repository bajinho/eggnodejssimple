'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/posts', controller.home.index);
  router.get('/posts/new', controller.home.novo);
  router.get('/posts/:id', controller.home.show);
  router.get('/posts/:id/edit', controller.home.edit);
  router.post('/posts', controller.home.create);
  router.patch('/posts/:id', controller.home.update);
  router.delete('/posts/:id', controller.home.destroy);
};
