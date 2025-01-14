import toFsCompatible from '../utils/string/toFsCompatible';

type ComponentChunkType = 'component' | 'preview';

const PREVIEW_CHUNK_SUFFIX = 'preview';

const MANIFEST_FILENAME = 'manifest.json';

export function toComponentChunkFilename(componentId: string, type: ComponentChunkType) {
  const fsCompatibleId = toFsCompatible(componentId);
  const fileNameSuffix = type === 'preview' ? `-${PREVIEW_CHUNK_SUFFIX}` : '';
  return `${fsCompatibleId}${fileNameSuffix}.js`;
}

export function toComponentManifestFilename(componentId: string) {
  const fsCompatibleId = toFsCompatible(componentId);
  return `${fsCompatibleId}-${MANIFEST_FILENAME}`;
}

export function toComponentChunkId(componentId: string, type: ComponentChunkType) {
  return type === 'component' ? componentId : `${componentId}-${PREVIEW_CHUNK_SUFFIX}`;
}

export function toComponentPackageName(componentId: string) {
  return componentId.replace(/\/[^/]+$/, '');
}
