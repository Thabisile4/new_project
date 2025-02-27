 # Question

What should you do if there are multiple issues with a project submission?

# Answer

1. Identify and Categorize the Issues
Break down the problems: Don’t treat the submission as one big issue. Try to identify and categorize the problems:
Functional issues: Code doesn’t work as expected (e.g., bugs, incorrect outputs, or failed tests).
Code quality issues: Poor readability, inconsistent naming, lack of comments, or inefficient code.
Design issues: Problems with the structure or organization of the code (e.g., large functions, poor modularization).
Testing issues: Missing tests, or incorrect test coverage.
Documentation issues: Insufficient or unclear documentation, lack of comments, or an outdated README.
Example:

Functional: Incorrect output for edge cases.
Code quality: Variables are poorly named.
Design: A large function needs to be refactored.
2. Provide Clear and Actionable Feedback
Be specific: Rather than just saying "This doesn't work," explain why it doesn’t work and give suggestions for fixing it. Point out exactly where the issue is, preferably with line numbers or a code snippet if applicable.
Prioritize the issues: Some issues might be more critical than others. Focus on the most important issues first—for instance, functional or critical bugs that prevent the code from running correctly.
High priority: Issues that affect the basic functionality of the program or that prevent the application from running.
Medium priority: Code style issues, missing comments, minor bugs that don’t break the code but reduce readability or usability.
Low priority: Things like minor optimizations, style inconsistencies, or areas for further improvement.
Order your feedback: Start with functional feedback, followed by code quality, and then design or stylistic improvements.
Example feedback:

Bug: “On line 34, you're using the variable x without initializing it first. This causes the program to crash when the user inputs a non-number.”
Code quality: “The variable names are unclear. For example, x could be renamed to userInput to make it more descriptive.”
Design: “The function calculateTotal() is doing too much. Consider breaking it into smaller functions, one for input validation and one for calculation.”
3. Focus on Constructive and Positive Language
Be empathetic and respectful: Remember that the person you're reviewing is likely learning and improving, so your feedback should be encouraging, not demotivating.
Be constructive: Focus on how the reviewer can improve the issue, rather than just pointing out what’s wrong. Offer suggestions for how to fix or improve the code, and avoid being overly critical.
Acknowledge good parts: Even if the submission has many issues, always highlight what was done well. Positive reinforcement encourages the submitter to keep improving.
Example:

"The logic behind your approach is great, but there are a few places where things could be optimized or fixed to improve performance. Let’s take a look at those.”
4. Break Down the Fixes into Steps
If the submission has multiple issues, it can be overwhelming for the submitter. Break down the fixes into manageable steps so they don’t feel lost or confused about where to start. You might even suggest tackling the most important issues first.
Provide resources or references that can help them understand how to fix certain issues (e.g., a link to a relevant article, documentation, or video).
Example:

“First, fix the bug on line 34 by initializing the variable. After that, focus on the function calculateTotal() and break it down into smaller parts. Finally, check your code for readability—refactor any unclear variable names and add comments.”
