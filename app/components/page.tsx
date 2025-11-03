import fs from 'fs'
import path from 'path'
import Link from 'next/link'

// Server Component: lists all files under /components grouped by folder

function getComponentsIndex() {
	const componentsRoot = path.join(process.cwd(), 'components')

	const groups: Record<string, { name: string; relPath: string }[]> = {}

	function walk(currentDir: string) {
		const entries = fs.readdirSync(currentDir, { withFileTypes: true })
		for (const entry of entries) {
			const full = path.join(currentDir, entry.name)
			if (entry.isDirectory()) {
				walk(full)
				continue
			}
			if (!entry.name.endsWith('.tsx') && !entry.name.endsWith('.ts')) continue
			const relFromRoot = path.relative(componentsRoot, full)
			const folder = path.dirname(relFromRoot) === '.' ? 'root' : path.dirname(relFromRoot)
			if (!groups[folder]) groups[folder] = []
			groups[folder].push({
				name: path.basename(relFromRoot),
				relPath: `components/${relFromRoot}`,
			})
		}
	}

	walk(componentsRoot)

	// sort groups and files for stable display
	const sorted = Object.entries(groups)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([folder, files]) => [folder, files.sort((a, b) => a.name.localeCompare(b.name))] as const)

	return sorted
}

export default function ComponentsDirectoryPage() {
	const groups = getComponentsIndex()

	return (
		<div className="container mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold mb-6">Components Index</h1>
			<p className="text-gray-600 mb-8">All components discovered under <code>/components</code>, grouped by folder. This is a read-only listing to verify presence without rendering components that require props.</p>

			<div className="space-y-10">
				{groups.map(([folder, files]) => (
					<section key={folder} className="border rounded-lg p-4">
						<h2 className="text-xl font-semibold mb-3">{folder}</h2>
						<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
							{files.map(({ name, relPath }) => (
								<li key={relPath} className="text-sm flex items-center justify-between gap-3">
									<span className="font-mono text-gray-800">{name}</span>
									<span className="text-gray-500">{relPath}</span>
								</li>
							))}
						</ul>
					</section>
				))}
			</div>

			<div className="mt-12">
				<h2 className="text-xl font-semibold mb-3">Shortcuts</h2>
				<ul className="list-disc pl-6 text-sm space-y-1">
					<li><Link className="text-teal-700 hover:underline" href="/services">Services index</Link></li>
					<li><Link className="text-teal-700 hover:underline" href="/in">Locations index</Link></li>
					<li><Link className="text-teal-700 hover:underline" href="/blog">Blog</Link></li>
				</ul>
			</div>
		</div>
	)
}


