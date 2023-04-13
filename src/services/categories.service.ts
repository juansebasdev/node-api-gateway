import { Router, Request, Response } from 'express';
import { BASE_URL_MOVIES } from '../config/globals';
import apiAdapter from '../utils/api.adapter';

const api = apiAdapter(BASE_URL_MOVIES);
const router: Router = Router();

router.get('/category/', async (req: Request, res: Response) => {
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

router.post('/category/', async (req: Request, res: Response) => {
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

router.get('/category/:category_id', async (req: Request, res: Response) => {
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

router.put('/category/:category_id', async (req: Request, res: Response) => {
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

router.delete('/category/:category_id', async (req: Request, res: Response) => {
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
