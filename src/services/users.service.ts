import { Router, Request, Response } from 'express';
import { BASE_URL_USERS } from '../config/globals';
import apiAdapter from '../utils/api.adapter';

const api = apiAdapter(BASE_URL_USERS);
const router: Router = Router();

router.post('/user/google/', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.post(req.path, req.body);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.post('/user/login/', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.post(req.path, req.body);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.post('/user/loginByToken/', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.post(req.path, req.body, { headers: req.headers });
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.post('/user/', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.post(req.path, req.body);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.post('/user/byEmail', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.post(req.path, req.body);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.get('/user/', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.get(req.path);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.get('/user/:id', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.get(req.path);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.post('/user/bySearchParam', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.post(req.path, req.body, { headers: req.headers });
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.get('/user/byRole/:role', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.get(req.path);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.put('/user/', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.put(req.path, req.body);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.post('/user/changeEmail', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.post(req.path, req.body);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.post('/user/changePassword', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.post(req.path, req.body);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

router.patch('/user/:id', async (req: Request, res: Response) => {
  let resp = null;
  try {
    resp = await api.patch(req.path);
    res.send(resp.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 500) {
        return res.status(error.response?.status);
      }
      return res.status(error.response.status).send(error.response.data);
    }
    console.error(error);
    res.status(404).json({ message: 'Servicio no disponible' });
  }
});

export { router };
