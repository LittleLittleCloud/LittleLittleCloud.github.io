import {
	ReactMarkdown,
	ReactMarkdownOptions,
} from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export const Markdown = (props: ReactMarkdownOptions) => {
	return (
		<ReactMarkdown
			{...props}
			remarkPlugins={[remarkGfm]}
			components={{
				// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
				img: ({ node, ...imgProps }) => <img loading="lazy" decoding="async" {...imgProps} />,
				...props.components,
			}}
		>
			{props.children}
		</ReactMarkdown>
	);
};
