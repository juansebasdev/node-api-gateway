import express from 'express';
import cors from 'cors';
import http from 'http';
import { config } from './config';
import { router as movie } from './services/movies.service';
import { router as offer } from './services/offers.service';
import { router as actor } from './services/actors.service';
import { router as director } from './services/directors.service';
import { router as category } from './services/categories.service';
import { router as user } from './services/users.service';

const app = express();

app.set('port', config.port);
app.use(express.json());
app.use(cors());

app.use('/api', movie);
// app.use('/api', offer);
app.use('/api', actor);
app.use('/api', director);
app.use('/api', category);
app.use('/api', user);

const httpServer = http.createServer(app);

httpServer.listen(app.get('port'), () => {
  console.log(`App listening on http://localhost:${app.get('port')}`);
});
