import { Router, Request, Response } from 'express';
import { BASE_URL_OFFERS } from '../config/globals';
import apiAdapter from '../utils/api.adapter';
import { checkCinema } from '../helpers/check.cinema';

const api = apiAdapter(BASE_URL_OFFERS);
const router: Router = Router();

router.get('/offer/', async (req: Request, res: Response) => {
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

router.get('/offer/cinema/:id', async (req: Request, res: Response) => {
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

router.post('/offer/', async (req: Request, res: Response) => {
  let resp = null;
  try {
    const { cinema } = req.body;
    const cinemaExist = await checkCinema(cinema);
    if (!cinemaExist)
      return res
        .status(400)
        .send({ message: `Cinema ${cinema} does not exist` });
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

router.get('/offer/:offer_id', async (req: Request, res: Response) => {
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

router.put('/offer/:offer_id', async (req: Request, res: Response) => {
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

router.delete('/offer/:offer_id', async (req: Request, res: Response) => {
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
