'use strict';

const {
  getAllAPop,
  getAllARelease,
  getAllAVote,
  getAllBVote,
  mockMovie,
  mockMovieId,
} = require('./mocks');

const BASE_URL = `http://localhost:${process.env.PORT || 4000}/api/movies`;

/**
 * @typedef {Object} TestResponse
 * @property {int} status
 * @property {{message: string}} error
 * @property {Record<string, any>} data
 */

/**
 * @param {string} url
 * @param {'get' | 'post'} method
 * @returns {TestResponse}
 */
const request = async (url, method) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method,
    });

    // All JSON responses should have `data` or `error` at the root
    const { data, error } = await response.json();

    return { status: response.status, data, error };
  } catch (error) {
    console.log('!!!', error.message);
    return {
      status: 500,
      data: null,
      error: error.message ?? 'something went wrong',
    };
  }
};
describe('Get Movie routes', () => {
  describe('#GET /api/movies', () => {
    it('sort by popularity', async () => {
      // arrange
      const sort = 'popularity';
      const keyword = 'a';

      // act
      const { data, status } = await request(
        `?keyword=${keyword}&sort=${sort}`,
        'get'
      );

      // assert
      expect(status).toBe(200);
      expect(data).toEqual(getAllAPop);
    });
    it('sort by release_date', async () => {
      // arrange
      const sort = 'release-date';
      const keyword = 'a';

      // act
      const { data, status } = await request(
        `?keyword=${keyword}&sort=${sort}`,
        'get'
      );

      // assert
      expect(status).toBe(200);
      expect(data).toEqual(getAllARelease);
    });
    it('sort by votes', async () => {
      // arrange
      const sort = 'vote';
      const keyword = 'a';

      // act
      const { data, status } = await request(
        `?keyword=${keyword}&sort=${sort}`,
        'get'
      );

      // assert
      expect(status).toBe(200);
      expect(data).toEqual(getAllAVote);
    });
    it('filter by keyword', async () => {
      // arrange
      const sort = 'vote';
      const keyword = 'b';

      // act
      const { data, status } = await request(
        `?keyword=${keyword}&sort=${sort}`,
        'get'
      );

      // assert
      expect(status).toBe(200);
      expect(data).toEqual(getAllBVote);
    });
  });
  describe('#GET /api/movies/:id', () => {
    it('should return the details', async () => {
      // arrange
      const id = mockMovieId;

      // act
      const { data, status } = await request(`/${id}`, 'get');

      // assert
      expect(status).toBe(200);
      expect(data).toEqual(mockMovie);
    });
    it('should return 404 for not found', async () => {
      // arrange
      const id = '1234321';

      // act
      const { error, status } = await request(`/${id}`, 'get');

      // assert
      expect(status).toBe(404);
      expect(error).not.toBeNull();
    });
  });
  describe('#POST /api/movies/:id/favourite', () => {
    it('should save to favourites', async () => {
      // arrange
      const id = mockMovieId;

      // act
      const { data, status } = await request(`/${id}`, 'get');

      // assert
      expect(status).toBe(200);
      expect(data).toEqual(mockMovie);
    });
    it('should return 404 for not found', async () => {
      // arrange
      const id = '1234321';

      // act
      const { error, status } = await request(`/${id}`, 'get');

      // assert
      expect(status).toBe(404);
      expect(error).not.toBeNull();
    });
  });
  // NOTE - Best practice for writing tests is to not have a test rely on a previous test.
  // These tests must be executed sequentially to work
  describe('Favourite routes', () => {
    describe('#GET /api/movies/favourites', () => {
      it('favourites should be empty', async () => {
        // arrange
        // act
        const { data, status } = await request('/favourites', 'get');

        // assert
        expect(status).toBe(200);
        expect(data).toEqual([]);
      });
    });
    describe('#POST /api/movies/:id/favourite', () => {
      it('should save to favourites', async () => {
        // arrange
        const id = mockMovieId;

        // act
        const { data, status } = await request(`/${id}/favourite`, 'post');

        // assert
        expect(status).toBe(200);
        expect(data).toEqual(mockMovie);
      });
      it('should return success if movie previously favourited', async () => {
        // arrange
        const id = mockMovieId;

        // act
        const { data, status } = await request(`/${id}/favourite`, 'post');

        // assert
        expect(status).toBe(200);
        expect(data).toEqual(mockMovie);
      });
      it('should return 404 for not found', async () => {
        // arrange
        const id = '1234321';

        // act
        const { error, status } = await request(`/${id}/favourite`, 'post');

        // assert
        expect(status).toBe(404);
        expect(error).not.toBeNull();
      });
    });
  });
  describe('#GET /api/movies/favourites', () => {
    it('should show favourites', async () => {
      // arrange
      // act
      const { data, status } = await request('/favourites', 'get');

      // assert
      expect(status).toBe(200);
      expect(data).toEqual([mockMovie]);
    });
  });
});
