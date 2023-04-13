import { Router, Request, Response } from 'express';
import { BASE_URL_MOVIES } from '../config/globals';
import apiAdapter from '../utils/api.adapter';

const api = apiAdapter(BASE_URL_MOVIES);
const router: Router = Router();

router.get('/movie/', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.get(req.path, { params: req.query });
    console.log(resp.data);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.post('/movie/', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.post(req.path, req.body);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.get('/movie/:movie_id', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.get(req.path);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.put('/movie/:movie_id', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.put(req.path, req.body);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.delete('/movie/:movie_id', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.delete(req.path);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

export { router };
