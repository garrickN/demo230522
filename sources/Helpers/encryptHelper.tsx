import {sha256} from 'react-native-sha256';
import {secretKey} from '../utils/Const';

export const encryptSha256 = async (
  requestId?: string,
  requestDate?: string,
) => {
  try {
    const encryptedString = await sha256(
      `${secretKey}|${requestId}|${requestDate}`,
    );
    return encryptedString;
  } catch (error) {
    return `${secretKey}`;
  }
};
