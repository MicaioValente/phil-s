export interface RnfsProps {
    convertFileToBase64: (filePath: string) => Promise<string | undefined>
}