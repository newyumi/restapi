'use strict'

import moment from 'moment'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
	 return queryInterface.bulkInsert(
		'users',
		[
			{
				email: 'test@test.com',
				password: 'test1234',
				createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
				updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
			},
			{
				email: 'test1@test.com',
				password: 'test1234',
				createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
				updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
			},
			{
				email: 'test2@test.com',
				password: 'test1234',
				createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
				updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
			}
		], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		return queryInterface.bulkDelete('users', null, {})
  }
}
