// Access external libraries from TypeScript
// =========================================
// =========================================

// Organize code with modules
// ==========================
/**
 * Modules provide a way to organize and categorize your code, enabling you to group related code together. Also, when code is inside a module, it is pulled from the global scope and into the scope of the module. This can help you avoid naming conflicts between components in the global namespace.
 */
/**
 * You can export any declaration (such as a variable, function, class, type alias, or interface) by adding the export keyword or import it by using the import keyword. Any file containing a top-level import or export statement is considered a module.
 * The export statement explicitly makes a component in one module available to other modules, while the import statement allows you to consume that component from another module. Modules are declarative; the import and export statements at the file level describe the relationships between them.
 */

// Exercise - Export and import module components
// ==============================================

/**
 * Let's see how to organize variable, class, interface, and function declarations into multiple modules and then use these components in code.
 */

// Export a module component
// -------------------------

/**
 * To export a module component, use the export keyword.
 * In this part of the exercise, you'll organize related functions into separate modules and then export the function declarations.
 */

// Create a new file called greetings_module.ts and then add the the following function called returnGreeting to it. Add the export keyword before the function name so it is available to other modules.
export function returnGreetingOne (greeting: string) {
  console.log(`The message from Greetings_module is ${greeting}.`);
}

// Create a second file called greetings-utilities_module.ts and then add the following two functions, returnGreeting and getLength, to the new file. Add export before the returnGreeting function so it is available to other modules. It is not necessary to export the getLength function because it is only used within the scope of the module.
export function returnGreeting (greeting: string) {
  let greetingLength = getLength(greeting);
  console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
function getLength(message: string): number {
  return message.length
}

// Import a module component
// -------------------------

/**
 * To use the exported components from a module, use the import statement. The import statement can take several forms depending on your objectives.
 * To import a single export from a module:
 */
// -> import { <component name> } from '<module name>'

// To rename an import, use the as keyword:
// -> import { <component name> as <new name> } from '<module name>'

// To import the entire module into a single variable, and use it to access the module exports:
// -> import * as <variable name> from '<module name>'

/**
 * In next part of the exercise, you'll import components from each of the two modules into a new module.
 * Create a new file called main.ts. This file will contain the main code of the application, including the import statements.
 * Import the returnGreeting function from greetings_module.ts using the import keyword.
 *
 *  -> import { returnGreeting } from './greetings_module.js';         // imports a single function in the module
 *
 * If greetings_module.ts had contained multiple components, you could import the entire module into a single variable (for example, allGreetingFunctions), as shown in the following statement. You can then use the variable to access all the module exports.
 *
 * -> import * as allGreetingFunctions from './greetings_module.js';  // imports all exported components in the module
 *
 * Try importing the returnGreeting function from greetings-utilities_module.ts using the statement import { returnGreeting } from './greetings-utilities_module.js'. You'll notice an error because both files contain a returnGreeting function and you now have a naming conflict in the global scope of main.ts.
 *
 * Correct the naming conflict by assigning the second instance of returnGreeting a new name. Replace { returnGreeting } with { returnGreeting as returnGreetingLength }. You can now use returnGreetingLength in place of the function name in your code.
 *
 * -> import { returnGreeting as returnGreetingLength } from './greetings-utilities_module.js';
 *
 * Now, you can use the returnGreetings functions in your code.
 * -> returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
 * -> allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
 * -> returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
 */

// Exercise - Compile modules
// ==========================

/**
 * Modules import one another using a module loader. At runtime, the module loader locates and executes all dependencies of a module before executing it. Depending on the module target that you specify during compilation, the compiler will generate appropriate code for Node.js (CommonJS), require.js (AMD), UMD, SystemJS, or ECMAScript 2015 native modules (ES6) module-loading systems. 
 * To compile modules, specify a --module target on the command line or in the tsconfig.json file for the project.
 * Continue your project from the previous exercise.
 *
 * Open the terminal and compile the main.ts module for Node.js by typing the following command:
 * -> tsc --module commonjs main.ts
 *
 * The compiler follows import statements to compile all dependent files. Notice that when main.ts is compiled, each module will become a separate .js file.
 *
 * Type node main to test the file.
 */

// Running modules from a web page
// ===============================

// If you want to instead compile the TypeScript file for ES6 for use in a web browser, type the following command:

// -> tsc --module es6 main.ts

// To run a module from a web page, remember to set the type option to "module":

/**
 *
 * <script type="module" src=".\main.js"></script>
 *
 */

// Exercise solution
// =================
// code


// Exercise - Access external type libraries
// ==========================

// Almost every project takes advantage of third-party libraries. TypeScript allows you to import libraries much in the same way you import modules you have created. However, unlike your modules the JavaScript library may not have type definitions.

/**
 * Importing libraries
 * In JavaScript, you use external libraries in your code by using the requires statement. In TypeScript, you gain access to them by using the import statement. After importing a library and its type definition, you can use it in your code and gain the benefits of Intellisense and type checking.
 */

/**
 * Type libraries
 * Static typing is a primary reason to use TypeScript. External type libraries are available for almost all common libraries, providing this information for libraries that don't contain it (such as those written in JavaScript). The TypeScript compiler can raise an error message if you attempt to use a library that doesn't have type definitions. You’ll also notice that Intellisense is not available when you lack these definitions.
 * While some JavaScript libraries will have type definitions, you will discover many do not. The open-source project DefinitelyTyped is a repository of TypeScript type definitions for many popular JavaScript libraries. You install type definitions by using the @types prefix.
 * Because the type definitions are only used by TypeScript during design-time, they are not required to be part of the published project. As a result, you can install them as devDependencies.
 *
 * -> npm install --save-dev @types/<library-name>
 */

/**
 * Exercise
 * In this exercise, you'll install and implement a type library called dotenv. This commonly used library loads environment variables from a .env file into process.env, enabling you to store configuration details in separate from your code and access them. You can use dotenv to manage things like connection strings and other values which may need to change depending on where your code is executing.
 *
 * Open a new workspace in Visual Studio Code.
 *
 * Add a new file called Main.ts.
 *
 * From the terminal, generate a new tsconfig.json file with default configuration settings.
 *
 * -> tsc --init
 *
 * Go to DefinitelyTyped and search for the dotenv type library. DefinitelyTyped will provide the name of the library to install and other implementation details.
 *
 * From the terminal, use npm to install the dotenv type library in your project folder.
 *
 * -> npm install dotenv
 *
 * Create a new file in the root directory of your project called .env. This file will contain environment-specific variables for the project.
 *
 * In .env, add the variables on new lines in the form of NAME=VALUE. For this example, define three variables:
 *
 * ```
 * DB_HOST=localhost
 * WEB_HOST=staging.adventure-works.com
 * ```
 *
 * In Main.ts, import the dotenv type library.
 * import dotenv from 'dotenv';
 *
 * Assign dotenv.config() to a variable. config reads your .env file, parses the contents, assigns it to process.env, and returns an object with a parsed key containing the loaded content or an error key if it failed.
 * const result = dotenv.config();
 *
 * TypeScript can now provide Intellisense and type checking for the config object. If you type result., you see that result has two properties: error and parsed. Add an error checking statement to verify that the config operation worked as expect.
 * if (result.error) {
 *   throw result.error;
 * }
 *
 * Return the contents of the parsed property to the console.
 * console.log(result.parsed);  // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
 *
 * Access the values contains in each key in process.env and return the value to the console.
 * console.log(process.env.DB_HOST);
 * console.log(process.env.WEB_HOST);
 *
 * This exercise provides an example of using dotenv. See dotenv to learn more about using it in your code.
 *
 */
