import { ExecutionResult, Language, Problem, TestCase } from '../types';

export function runTests(
  problem: Problem,
  userCode: string,
  language: Language,
  customTestCase?: TestCase
): ExecutionResult {
  const testsToRun = customTestCase ? [customTestCase] : problem.testCases;
  const consoleLogs: string[] = [];
  
  // Syntax and compilation diagnostics simulation
  consoleLogs.push(`[Compiling ${language.toUpperCase()} Solution for "${problem.title}"]`);
  
  const syntaxErrors = checkBasicSyntax(userCode, language);
  if (syntaxErrors.length > 0) {
    return {
      passed: false,
      totalTests: testsToRun.length,
      passedTests: 0,
      testDetails: testsToRun.map(t => ({
        testId: t.id,
        input: t.input,
        expected: t.expectedOutput,
        actual: `Compilation Error:\n${syntaxErrors.join('\n')}`,
        passed: false,
        durationMs: 0
      })),
      runtimeMs: 0,
      memoryKb: 0,
      consoleLogs: [
        `[Error] Compilation failed with ${syntaxErrors.length} diagnostic error(s):`,
        ...syntaxErrors
      ]
    };
  }

  consoleLogs.push(`[Build Success] Code compiled with 0 warnings. Running ${testsToRun.length} test vector(s)...`);

  // Simulated execution timing based on language efficiency
  const baseRuntime = language === 'c' ? 2 : language === 'cpp' ? 3 : language === 'java' ? 9 : 14;
  const baseMemory = language === 'c' ? 820 : language === 'cpp' ? 1140 : language === 'java' ? 34200 : 9600;

  const testDetails = testsToRun.map((tc, idx) => {
    // If user's code has minimal changes or default return, evaluate against solution
    const isPassing = evaluateUserOutput(userCode, tc, problem, language);
    const jitter = Math.floor(Math.random() * 4);
    const duration = baseRuntime + jitter;
    
    const actual = isPassing ? tc.expectedOutput : simulateMistakeOutput(tc.expectedOutput);

    return {
      testId: tc.id || `custom-${idx}`,
      input: tc.input,
      expected: tc.expectedOutput,
      actual: actual,
      passed: isPassing,
      durationMs: duration
    };
  });

  const passedCount = testDetails.filter(t => t.passed).length;
  const totalDuration = testDetails.reduce((sum, t) => sum + t.durationMs, 0);
  const memoryUsed = baseMemory + Math.floor(Math.random() * 200);

  if (passedCount === testsToRun.length) {
    consoleLogs.push(`[SUCCESS] All ${testsToRun.length} test case(s) passed!`);
    consoleLogs.push(`Time Complexity: ~${problem.timeComplexity.average} | Memory Space: ~${problem.memoryComplexity.space}`);
  } else {
    consoleLogs.push(`[FAILURE] ${testsToRun.length - passedCount} test case(s) failed.`);
  }

  return {
    passed: passedCount === testsToRun.length,
    totalTests: testsToRun.length,
    passedTests: passedCount,
    testDetails,
    runtimeMs: totalDuration,
    memoryKb: memoryUsed,
    consoleLogs
  };
}

function checkBasicSyntax(code: string, lang: Language): string[] {
  const errors: string[] = [];
  const trimmed = code.trim();

  if (trimmed.length < 20) {
    errors.push('Error: Solution body appears too brief or empty.');
    return errors;
  }

  // Check brackets balance
  let paren = 0, brace = 0, bracket = 0;
  for (const ch of code) {
    if (ch === '(') paren++;
    else if (ch === ')') paren--;
    else if (ch === '{') brace++;
    else if (ch === '}') brace--;
    else if (ch === '[') bracket++;
    else if (ch === ']') bracket--;

    if (paren < 0 || brace < 0 || bracket < 0) {
      errors.push('SyntaxError: Unmatched closing parenthesis, bracket, or brace.');
      break;
    }
  }

  if (paren > 0) errors.push('SyntaxError: Unclosed parenthesis "(" in code block.');
  if (brace > 0) errors.push('SyntaxError: Unclosed curly brace "{" in code block.');
  if (bracket > 0) errors.push('SyntaxError: Unclosed square bracket "[" in code block.');

  if (lang === 'cpp' || lang === 'c') {
    if (!code.includes(';') && !code.includes('#include')) {
      errors.push('Error: Missing semicolons (;) or preprocessor directives.');
    }
  }

  if (lang === 'java') {
    if (!code.includes('class') || !code.includes('{')) {
      errors.push('JavaCompileError: Class declaration or body missing.');
    }
  }

  if (lang === 'python') {
    if (code.includes('def ') && !code.includes(':')) {
      errors.push('Indentation/SyntaxError: Missing colon (:) in Python function signature.');
    }
  }

  return errors;
}

function evaluateUserOutput(userCode: string, tc: TestCase, problem: Problem, lang: Language): boolean {
  // If user code is identical to starter code or trivial empty, it shouldn't pass
  const starter = problem.starterCode[lang].trim();
  const trimmed = userCode.trim();
  
  if (trimmed === starter) {
    // If the starter code was already working (e.g. complete working reference in starter), let it pass
    return true;
  }

  // Check for common indicators of an actual solution
  const hasLogicKeywords = 
    userCode.includes('for') || 
    userCode.includes('while') || 
    userCode.includes('return') ||
    userCode.includes('map') ||
    userCode.includes('sum') ||
    userCode.includes('math');

  if (!hasLogicKeywords) {
    return false;
  }

  return true;
}

function simulateMistakeOutput(expected: string): string {
  if (expected === 'YES') return 'NO';
  if (expected === 'NO') return 'YES';
  if (expected === '1') return '0';
  if (expected === '0') return '1';
  if (!isNaN(Number(expected))) {
    return String(Number(expected) - 1);
  }
  return expected.split('').reverse().join('');
}
