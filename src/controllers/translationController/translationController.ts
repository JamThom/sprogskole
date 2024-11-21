import { Request, Response } from 'express';
import { getTranslationsByGroupId } from '../../models/translationModel/translationModel';

export const getTranslations = async (req: Request, res: Response) => {
  const { translationGroupId } = req.params;
  try {
    const translations = await getTranslationsByGroupId(translationGroupId);
    res.json(translations);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};