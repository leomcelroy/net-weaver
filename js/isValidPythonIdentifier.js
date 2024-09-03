export function isValidPythonIdentifier(identifier) {
    // Regular expression for a valid Python identifier
    const identifierRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

    // Check if the identifier matches the regular expression
    if (!identifierRegex.test(identifier)) {
        return false;
    }

    // Check if the identifier is a Python keyword (since keywords aren't valid identifiers)
    const pythonKeywords = new Set([
        "False",
        "None",
        "True",
        "and",
        "as",
        "assert",
        "async",
        "await",
        "break",
        "class",
        "continue",
        "def",
        "del",
        "elif",
        "else",
        "except",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "in",
        "is",
        "lambda",
        "nonlocal",
        "not",
        "or",
        "pass",
        "raise",
        "return",
        "try",
        "while",
        "with",
        "yield",
    ]);

    if (pythonKeywords.has(identifier)) {
        return false;
    }

    return true;
}
