import superagent from 'superagent';

class ApiClient_ {
  constructor(req) {
    ['get', 'post', 'put', 'patch', 'del'].
      forEach((method) => {
        this[method] = (path, options) => {
          return new Promise((resolve, reject) => {
            const request = superagent[method](this.formatUrl(path));
            if (options && options.params) {
              request.query(options.params);
            }
            if (options && options.data) {
              request.send(options.data);
            }
            request.end((err, res) => {
              if (err) {
                reject((res && res.body) || err);
              } else {
                resolve(res.body);
              }
            });
          });
        };
      });
  }

  /* This was originally a standalone function outside of this class, but babel kept breaking, and this fixes it  */
  formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? '/' + path : path;
    //TODO this will need to be adjusted
    return '/api' + adjustedPath;
  }
}
const ApiClient = ApiClient_;

export default ApiClient;
