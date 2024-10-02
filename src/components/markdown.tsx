import { ReactMarkdownProps } from "react-markdown/lib/complex-types";
import {
	ReactMarkdown,
	ReactMarkdownOptions,
} from "react-markdown/lib/react-markdown";
import { CodeBlock } from "./codeblock";
import remarkGfm from "remark-gfm";

export const Markdown = (props: ReactMarkdownOptions) => {
	return (
		<ReactMarkdown
			className="prose max-w-none prose-p:text-primary-foreground prose-a:text-pink-500 prose-bullets:text-pink-500 prose-li:text-primary-foreground prose-code:text-primary-foreground/80"
			{...props}
			remarkPlugins={[remarkGfm]}
			components={{
				code: ({ node, inline, className, children, ...props }) => {
					const match = /language-(\w+)/.exec(className || "");
					return !inline && match ? (
						<CodeBlock
							language={match[1]}
							value={String(children).replace(/\n$/, "")}
							{...props}
						/>
					) : (
						<code {...props} className={className}>
							{children}
						</code>
					);
				},
				...props.components,
			}}
		>
			{props.children}
		</ReactMarkdown>
	);
};
