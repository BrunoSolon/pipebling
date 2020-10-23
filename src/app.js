import server from './server';
import './db/database';
import Constants from './utils/constants';

server.listen(Constants.port);
