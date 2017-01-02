//    Copyright 2016, 2017 Yoshi Yamaguchi
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

/**
 * Notation class holds comment notation information of each programming language.
 * TODO(ymotongpoo): add default recommended commenting style in Enum.
 */
class Notation {
    private _languageId: string;
    private _multi: [string, string];
    private _single: string;
    private _ornament: string;

    constructor(id: string, multi: [string, string], single: string, ornament: string) {
        this._languageId = id;
        this._multi = multi;
        this._single = single;
        this._ornament = ornament;
    }

    get languageId(): string {
        return this._languageId;
    }

    get multi(): [string, string] {
        return this._multi;
    }

    get single(): string {
        return this._single;
    }

    get ornament(): string {
        return this._ornament;
    }

    /**
     * hasMulti returns if the Notation instance has multiple line comment style tokens.
     */
    hasMulti(): Boolean {
        const [l, r] = this._multi;
        return l.length > 0 && r.length > 0;
    }

    /**
     * hasSingle returns if the Notation instance has single line comment style tokens.
     */
    hasSingle(): Boolean {
        return this._single.length > 0;
    }
}

// init (alphabetical order)
const bat = new Notation("bat", ["", ""], "rem", "");
const c = new Notation("c", ["/**", " */"], "", " * ");
const cpp = new Notation("cpp", ["/**", " */"], "//", " *");
const csharp = new Notation("csharp", ["/**", " */"], "//", " * ");
const css = new Notation("css", ["/**", " */"], "", " *");
const dockerfile = new Notation("dockerfile", ["", ""], "#", " ");
const erlang = new Notation("erlang", ["", ""], "%%", "");
const fsharp = new Notation("fsharp", ["(**", " *)"], "//", " * ");
const go = new Notation("go", ["/**", " */"], "//", " *");
const groovy = new Notation("groovy", ["/**", " */"], "//", " * ");
const html = new Notation("html", ["<!--", "-->"], "", " ");
const ini = new Notation("ini", ["", ""], ";", "");
const java = new Notation("java", ["/**", " */"], "//", " *");
const javascript = new Notation("javascript", ["/**", " */"], "//", " * ");
const makefile = new Notation("makefile", ["", ""], "#", "");
const markdown = new Notation("markdown", ["<!---", "-->"], "", " ");
const objectivec = new Notation("objective-c", ["/**", " */"], "//", " * ");
const perl = new Notation("perl", ["=pod", "=cut"], "#", " ");
const php = new Notation("php", ["/**", " */"], "//", " * ");
const plaintext = new Notation("plaintext", ["", ""], "//", ""); // TODO(ymotongpoo): add feature to support custom single line comment style. (#15)
const python = new Notation("python", ['"""', '"""'], "#", " ");
const ruby = new Notation("ruby", ["=begin", "=end"], "#", " ");
const rust = new Notation("rust", ["/**", " */"], "//", " * ");
const typescript = new Notation("typescript", ["/**", " */"], "//", " * ");
const scss = new Notation("scss", ["/**", " */"], "//", " * ");
const shellscript = new Notation("shellscript", ["<<LICENSE", ">>"], "#", " ");
const swift = new Notation("swift", ["/**", " */"], "//", " * ");
const xml = new Notation("xml", ["<!--", "-->"], "", "");

const haskell = new Notation("haskell", ["{--", "-}"], "--", " - ");
const lisp = new Notation("lisp", ["", ""], ";;", "");
const ocaml = new Notation("ocaml", ["(**", " *)"], "", " * ");

// map betweeen languageId and its comment notations.
// LanguageId is listed here.
// https://code.visualstudio.com/docs/languages/identifiers
export const notations: {[key: string]: Notation} = {
    "bat": bat,
    "c": c,
    "clojure": lisp,
    "cpp": cpp,
    "csharp": csharp,
    "css": css,
    "dockerfile": dockerfile,
    "erlang": erlang,
    "fsharp": fsharp,
    "go": go,
    "groovy": groovy,
    "html": html,
    "ini": ini,
    "java": java,
    "javascript": javascript,
    "javascriptreact": javascript,
    "makefile": makefile,
    "markdown": markdown,
    "objective-c": objectivec,
    "perl": perl,
    "php": php,
    "plaintext": plaintext,
    "python": python,
    "ruby": ruby,
    "rust": rust,
    "typescript": typescript,
    "typescriptreact": typescript,
    "sass": scss,
    "scss": scss,
    "shellscript": shellscript,
    "swift": swift,
    "xml": xml,

    "haskell": haskell,
    "lisp": lisp,
    "ocaml": ocaml,
}