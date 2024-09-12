import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import inquirer from 'inquirer';

const componentsPath = './lib/components';

const toPascalCase = (str: string) => str[0].toUpperCase() + str.slice(1);
const toCamelCase = (str: string) => str[0].toLowerCase() + str.slice(1);

const askForComponentName = async (): Promise<string> => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'componentName',
            message: 'What is the name of the new component?',
        },
    ]);
    return toPascalCase(answers.componentName.trim());
};

const generateComponentFiles = (componentName: string) => {
    const componentDir = join(componentsPath, componentName);

    if (existsSync(componentDir)) {
        console.error(`Component ${componentName} already exists!`);
        return;
    }

    mkdirSync(componentDir, { recursive: true });

    const templateDir = './scripts/templates';

    const tsxTemplate = readFileSync(join(templateDir, 'Template.tsx'), 'utf-8')
        .replace(/Template/g, componentName)
        .replace(/template/g, toCamelCase(componentName));

    const storiesTemplate = readFileSync(join(templateDir, 'Template.stories.tsx'), 'utf-8')
        .replace(/Template/g, componentName)
        .replace(/template/g, toCamelCase(componentName));

    const scssTemplate = readFileSync(join(templateDir, 'Template.module.scss'), 'utf-8')
        .replace(/template/g, toCamelCase(componentName));

    writeFileSync(join(componentDir, `${componentName}.tsx`), tsxTemplate);
    writeFileSync(join(componentDir, `${componentName}.stories.tsx`), storiesTemplate);
    writeFileSync(join(componentDir, `${componentName}.module.scss`), scssTemplate);

    console.log(`Component ${componentName} has been created successfully in ${componentDir}`);
};


const createComponent = async () => {
    const componentName = await askForComponentName();
    generateComponentFiles(componentName);
};

createComponent();
