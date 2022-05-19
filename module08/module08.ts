// Organize code using TypeScript namespaces
// =========================================
// =========================================

/**
 * Introduction
 * TypeScript provides two ways to organize code: Namespaces and modules. This module explains how to organize TypeScript code using namespaces. While both namespaces and modules provide a way to categorize related code in meaningful ways and help you control which code is exposed to the global namespace of your applications, there are some differences between them.
 *
 * Learning objectives
 * Explain the purpose of namespaces.
 * Implement single-file namespaces.
 * Implement multi-file namespaces.
 * Explain the design considerations for using namespaces and modules.
 */

// Introduction to TypeScript namespaces
// =====================================

/**
 * Namespaces (referred to as "internal modules" in earlier versions of TypeScript) are a TypeScript-specific way to organize and categorize your code, enabling you to group related code together. Namespaces allow you to group variables, functions, interfaces, or classes related to business rules in one namespace and security in another.
 * Code inside a namespace is pulled from the global scope and into the scope of the namespace. This placement can help you avoid naming conflicts between components in the global namespace and can be beneficial when working with distributed development teams that may use similar component names.
 * For example, namespace A and namespace B both share a function called functionName. Any attempt to access the function without referencing the containing namespace results in an error because the variable declarations are in the global namespace, while the two functions are contained within the scope of their respective namespaces.
 */

/**
 * You can use namespaces to:
 *
 * Reduce the amount of code in the global scope, limiting "global scope pollution."
 * Provide a context for names, which helps reduce naming collisions.
 * Enhance reusability.
 */

// Exercise - Organize code by using single file namespaces
// ========================================================

// You can implement namespaces within a single TypeScript file or across multiple TypeScript files.

/**
 * Complete the steps to define a single file namespace:
 *
 * Open a new Visual Studio Code workspace.
 * Create a new file called module08_exercise.ts.
 * Define a new namespace by using the namespace keyword followed by the namespace name. You can define as many namespaces as needed within a single TypeScript file. At the top of the file, define two namespaces named Greetings and GreetingsWithLength.
 *
    namespace Greetings {
    }
    namespace GreetingsWithLength {
    }
 *
 * You can now define functions and classes inside of the namespace definition. All components defined within the namespace are scoped to the namespace and removed from the global scope. Add a new function called returnGreeting to the Greetings namespace. This function returns the value of a parameter to the console.
 *
    namespace Greetings {
      function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
      }
    }
 *
 * Add two new functions, returnGreeting and getLength, to the GreetingsWithLength namespace. The returnGreeting function uses the helper function getLength to determine the length of the greeting before returning the message to the console.
 *
    namespace GreetingsWithLength {
      function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
      }
      function getLength(message: string): number {
        return message.length
      }
    }
 *
 * If you want to make a function or class available to code outside of the namespace, add the export keyword before its name. If you omit the export keyword, the component is only available inside the namespace. You can do this if defining components that should only be directly accessible to other components within the namespace. Add the export keyword to the returnGreeting function in both namespaces. The getLength function should not be accessible outside of the GreetingsWithLength namespace so omit the export keyword.
 *
    namespace Greetings {
      export function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
      }
    }
    namespace GreetingsWithLength {
      export function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
      }
      function getLength(message: string): number {
        return message.length
      }
    }
 *
 * To use a class or function within a namespace, prefix the component name with the namespace name. Try calling the returnGreeting function without specifying the namespace. This returns an error because both returnGreeting functions are out of scope in the global namespace. Now, try prefixing Greetings or GreetingsWithLength to the returnGreeting function. This provides access to the function within each respective namespace.
 *
    returnGreeting('Hello');                     // Returns error
    Greetings.returnGreeting('Bonjour');         // OK
    GreetingsWithLength.returnGreeting('Hola');  // OK
 *
 */

// Organize code using nested namespaces
// =====================================

// You can also nest namespaces within namespaces, providing even more options for organizing your code.

/**
 * Continue working in the code editor.
 *
 * Create a new namespace called AllGreetings and then move the Greetings and GreetingsWithLength namespaces that you created previously inside it. Add the export keyword before both namespace names. This allows the namespace to be accessible outside of the AllGreetings namespace.
 *
    namespace AllGreetings {
      export namespace Greetings {
        export function returnGreeting (greeting: string) {
          console.log(`The message from namespace Greetings is ${greeting}.`);
        }
      }
      export namespace GreetingsWithLength {
        export function returnGreeting (greeting: string) {
          let greetingLength = getLength(greeting);
          console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        function getLength(message: string): number {
          return message.length
        }
      }
    }
 *
 * To call the functions, start by typing the outermost namespace name, AllGreetings, a period, and then the next level in the namespace hierarchy, Greetings or GreetingsWithLength. Continue down the hierarchy until you reach the function name.
 *
    AllGreetings.Greetings.returnGreeting('Bonjour');        // OK
    AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK
 *
 */

// Defining a namespace alias
// ==========================

/**
 * TypeScript creates an easy-to-navigate hierarchy of nested namespaces. But, as your nested namespaces become more complex, you may want to create an alias to shorten and simplify your code. To do this, use the import keyword.
 * Continue working in the code editor.
 * Type import greet = AllGreetings.Greetings. This defines a new alias called greet that represents AllGreetings.Greetings. You can now use greet in place of AllGreetings.Greetings in your code.
 *
    import greet = AllGreetings.Greetings;
    greet.returnGreeting('Bonjour');
 *
 */

// Compiling single file namespaces
// You compile a single file namespace the same way that you compile any other TypeScript file. Because namespaces are a TypeScript-only construct, they are removed from the resulting JavaScript code and converted into variables that nest as necessary to form namespace-like objects.

// Organize code by using multi-file namespaces
// ============================================

/**
 *
 * You can extend namespaces by sharing them across multiple TypeScript files. When you have namespaces in multiple files that relate to each other, you must add reference tags to tell the TypeScript compiler about the relationships between the files. For example, assume that you have three Typescript files:
 *
 * interfaces.ts, which declares a namespace that contains some interface definitions.
 * functions.ts, which declares a namespace with functions that implement the interfaces in interfaces.ts.
 * main.ts, which calls the functions in functions.ts and represents the main code of your application.
 *
 * To inform TypeScript of the relationship between interfaces.ts and functions.ts, you add a reference to interfaces.ts using the triple slash (///) syntax to the top of functions.ts. And then in main.ts, which has a relationship with both interfaces.ts and functions.ts, you add a reference to both files.
 *
 * interfaces.ts
 *
    namespace Interfaces {
    }
 *
 * functions.ts
 *
    /// <reference path="interfaces.ts" />
    namespace Functions {
      export function functionName {
      }
    }
 *
 * main.ts
 *
    /// <reference path="interfaces.ts" />
    /// <reference path="functions.ts" />
    let x = Functions.functionName();
 *
 * When there is a reference to more than one file, start with the highest-level namespace and then work your way down. TypeScript will use this order when compiling the files.
 *
 */

// Compiling multi-file namespaces
// ===============================
/**
 * There are two ways to compile multiple file namespaces: per-file compilation and single file compilation.
 * By default, when you run the TypeScript compiler on main.ts, it will examine the reference statements in the file and produce one JavaScript file for each input file. If you choose this option, use <script> tags on the webpage to load each emitted file in the appropriate order.
 * You can also instruct the compiler to produce a single JavaScript output file by using the --outFile option. In the example above, the command tsc --outFile main.js main.ts instructs the compiler to produce a single JavaScript file called main.js.
 *
 */

// Design considerations
// =====================

/**
 *
 * You can use namespaces or modules for code organization, and both can contain code and declarations.
 * While namespaces are easy to use for simple implementations and do not depend on a module loader, modules offer some additional benefits that namespaces do not. Modules:
 *
 *  Declare their dependencies.
 *  Provide better code reuse.
 *  Offer strong isolation.
 *  Hide the internal statements of the module definitions and show only the methods and parameters associated to the declared component.
 *  Provide better tooling support for bundling.
 *  Are recommended over namespaces for Node.js applications because modules are the default.
 *  Can resolve top-down JavaScript flow issues because a reference to an external method or class is instantiated only on method invocation.
 *
 * And, starting with ECMAScript 2015, modules are native part of the language, and should be supported by all compliant engine implementations. So, for new projects, modules are recommended for code organization.
 *
 */

// The following table summarizes and compares modules and namespaces.


/**
 * ---------------------------------------------------------------------------------------------------------------------------------
 * | Module	                                                        | Namespace                                                    |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * Use modules to organize code into separate files for logical     | Use namespaces to organize code into separate files for      |
 * grouping of functionality.	                                      | logical grouping of functionality.                           |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * Modules execute in their local scope, not in the global scope.	  | Namespaces execute in their local scope, not in the global   |
 *                                                                  | scope.                                                       |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * Modules are declarative; the relationships between modules are   | Namespaces cannot declare their dependencies.                |
 * specified in terms of imports and exports at the file level.	    |                                                              |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * You define a module by using either the export or import keyword | You define a namespace by using the namespace keyword within |
 * within a file. Any file containing a top-level import or export  | a file. Namespace statements can be nested and span multiple |
 * is considered a module.                                          | files.                                                       |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * To expose individual module components outside the module, use   | To expose individual namespace components outside of the     |
 * the export keyword.	                                            | namespace, use the export keyword.                           |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * To use a component from one module in another module, use the    | To use a component from one namespace in another TypeScript  |
 * import keyword.                                                  | file, add a reference statement using the triple-slash (///) |
 *                                                                  | syntax.                                                      |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * To compile a module and all its dependent files, use the         | To compile TypeScript files containing namespaces and all    |
 * tsc --module command.	                                          | their dependent files into individual JavaScript files, use  |
 *                                                                  | the tsc command.                                             |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * It is not possible to have multi-file modules compiled to a      | To compile all TypeScript files containing namespaces into a |
 * single module.	                                                  | single JavaScript file, use the tsc --outFile command.       |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * Modules import another module by using a module loader API.      | You specify the API when you compile the module.	Namespaces |
 *                                                                  | are loaded by specifying the .js file names (in order) using |
 *                                                                  | the <script> tag in the HTML page.                           |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * In modules, you can re-export the components either using        | In namespaces, you cannot re-export components or rename     |
 * their original name or rename it.	                              | them.                                                        |
 * ---------------------------------------------------------------------------------------------------------------------------------
 */



