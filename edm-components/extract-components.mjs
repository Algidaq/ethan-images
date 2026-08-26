// @ts-check
import components from "./components.mjs";
import axios from "axios";
import fs from "fs/promises";
import path from "path";

const BATCH_SIZE = 5;
const OUTPUT_PATH = "edm-components/components-with-html.json";
const IMAGE_OUTPUT_DIR = "edm-components/component-thumbs";
const origin = "https://marketingos-4676w.ondigitalocean.app";
const apiBaseUrl = `${origin}/api/edms/noon-credit-card-20-cashback`;
const editUrl = `${origin}/edms/noon-credit-card-20-cashback/edit`;

/**
 *
 * @param {typeof components[number]} component
 * @param {number} position
 */
const insertComponent = async (component, position) => {
  try {
    const headers = {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,ar-AE;q=0.8,ar;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        'team_session="aksharak@emiratesnbd.com.ao6Ypw.lk1RolEzNUcK868dTBL5m3ZXeu0"',
      Referer: editUrl,
    };
    const body = { code: component.code, position: position };

    const response = await axios.post(`${apiBaseUrl}/insert_component`, body, {
      headers,
    });
    return response.data;
  } catch (e) {
    console.error(`Error inserting component ${component.code}:`, e);
    throw e;
  }
};

const modulesRes = {
  slug: "noon-credit-card-20-cashback",
  modules: [
    {
      index: 0,
      title: "Module 1",
      html: '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">\n  <tbody><tr></tr>\n</tbody></table>',
      group_id: null,
      group_label: null,
    },
  ],
  body_html: "",
};

const fetchModules = async () => {
  try {
    const headers = {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,ar-AE;q=0.8,ar;q=0.7",
      "cache-control": "no-cache",
      pragma: "no-cache",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        'team_session="aksharak@emiratesnbd.com.ao6Ypw.lk1RolEzNUcK868dTBL5m3ZXeu0"',
      Referer: editUrl,
    };
    const response = await axios.get(`${apiBaseUrl}/modules`, {
      headers,
    });
    /**
     * @type {typeof modulesRes}
     */
    const data = response.data;
    return data;
  } catch (e) {
    console.error("Error fetching modules:", e);
    throw e;
  }
};
/**
 *
 * @param {typeof modulesRes['modules']} modules
 * @returns
 */
const findLastModule = (modules) => {
  return modules[modules.length - 1];
};

/**
 *
 * @param {string} filePath
 */
const fileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

/**
 * @returns {Promise<Array<typeof components[number] & { html?: string, thumbnail_file?: string }>>}
 */
const loadSavedComponents = async () => {
  try {
    const file = await fs.readFile(OUTPUT_PATH, "utf8");
    return JSON.parse(file);
  } catch (error) {
    // @ts-ignore
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
};

/**
 *
 * @param {Array<typeof components[number] & { html?: string, thumbnail_file?: string }>} componentsWithHtml
 */
const saveComponents = async (componentsWithHtml) => {
  const componentsByCode = new Map(
    componentsWithHtml.map((component) => [component.code, component]),
  );
  const orderedComponents = components
    .map((component) => componentsByCode.get(component.code))
    .filter(Boolean);

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, JSON.stringify(orderedComponents, null, 2));
};

/**
 *
 * @param {Array<typeof components[number]>} list
 * @param {number} size
 */
const chunkComponents = (list, size) => {
  const chunks = [];

  for (let i = 0; i < list.length; i += size) {
    chunks.push(list.slice(i, i + size));
  }

  return chunks;
};

/**
 *
 * @param {typeof components[number]} component
 */
const getThumbnailFilePath = (component) => {
  const { pathname } = new URL(component.thumbnail_url, origin);
  const extension = path.extname(pathname) || ".png";
  return path.join(IMAGE_OUTPUT_DIR, `${component.code}${extension}`);
};

/**
 *
 * @param {typeof components[number]} component
 */
const downloadComponentImage = async (component) => {
  const thumbnailFile = getThumbnailFilePath(component);

  if (await fileExists(thumbnailFile)) {
    return thumbnailFile;
  }

  await fs.mkdir(path.dirname(thumbnailFile), { recursive: true });

  const response = await axios.get(
    new URL(component.thumbnail_url, origin).toString(),
    {
      responseType: "arraybuffer",
    },
  );

  await fs.writeFile(thumbnailFile, response.data);
  return thumbnailFile;
};

const buildComponentLib = async () => {
  const savedComponents = await loadSavedComponents();
  const savedCodes = new Set(
    savedComponents
      .filter((component) => component.html)
      .map((component) => component.code),
  );
  const componentsToInsert = components.filter(
    (component) => !savedCodes.has(component.code),
  );
  const batches = chunkComponents(componentsToInsert, BATCH_SIZE);

  console.log(`Total components: ${components.length}`);
  console.log(`Already saved: ${savedCodes.size}`);
  console.log(`Remaining: ${componentsToInsert.length}`);

  for (const savedComponent of savedComponents) {
    if (!savedComponent.html) continue;

    savedComponent.thumbnail_file = await downloadComponentImage(savedComponent);
  }

  if (savedComponents.length) {
    await saveComponents(savedComponents);
  }

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex];
    const moduleRes = await fetchModules();
    // @ts-ignore
    const lastModule = findLastModule(moduleRes.modules);
    // @ts-ignore
    const startPosition = lastModule ? lastModule.index + 1 : 0;
    /**
     * @type {Record<string, typeof components[number]>}
     */
    const insertedComponentsByPosition = {};

    console.log(
      `Batch ${batchIndex + 1}/${batches.length}: ${batch
        .map((component) => component.code)
        .join(", ")}`,
    );
    console.log(
      `Progress before batch: ${savedCodes.size}/${components.length} (${Math.round(
        (savedCodes.size / components.length) * 100,
      )}%) - ${components.length - savedCodes.size} remaining`,
    );

    await Promise.all(
      batch.map((component, index) => {
        const position = startPosition + index;
        insertedComponentsByPosition[position] = component;
        return insertComponent(component, position);
      }),
    );

    const modules = await fetchModules();

    let savedBatchCount = 0;

    // @ts-ignore
    for (const module of modules.modules) {
      const component = insertedComponentsByPosition[module.index];

      if (component) {
        const thumbnailFile = await downloadComponentImage(component);

        savedComponents.push({
          ...component,
          html: module.html,
          thumbnail_file: thumbnailFile,
        });
        savedCodes.add(component.code);
        savedBatchCount++;
      }
    }

    if (savedBatchCount !== batch.length) {
      throw new Error(
        `Batch ${batchIndex + 1} saved ${savedBatchCount}/${batch.length} inserted components.`,
      );
    }

    await saveComponents(savedComponents);
    console.log(
      `Saved progress: ${savedCodes.size}/${components.length} (${Math.round(
        (savedCodes.size / components.length) * 100,
      )}%) - ${components.length - savedCodes.size} remaining`,
    );
  }

  console.log("All components are saved.");
};

buildComponentLib()
  .then(() => {
    console.log("Component library built successfully.");
  })
  .catch((error) => {
    console.error("Error building component library:", error);
  });
