import { DataSourceDecorator } from './DataSourceDecorator';

export class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const base64Data = btoa(data);
    console.log(`[EncryptionDecorator] Encrypted data: ${base64Data}`);
    super.writeData(base64Data);
  }

  readData(): string {
    const base64Data = super.readData();
    const data = atob(base64Data);
    console.log(`[EncryptionDecorator] Decrypted data: ${data}`);
    return data;
  }
}
