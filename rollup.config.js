import buble from '@rollup/plugin-buble'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export function createEntries(configs) {
    return configs.map((c) => createEntry(c))
}

function createEntry(config) {
    const c = {
        input: config.input,
        plugins: [],
        output: {
            file: config.file,
            format: config.format
        },
        onwarn: (msg, warn) => {
            if (!/Circular/.test(msg)) {
                warn(msg)
            }
        }
    }

    c.plugins.push(json())

    c.external = [
        'vue',
    ]

    if (config.format === 'es') {
        c.external = [
            ...c.external,
            /^lodash/,
            'ajv',
            // ajv dependencies
            'fast-deep-equal',
            'fast-json-stable-stringify',
            'json-schema-traverse',
            'uri-js',
        ]
    }

    if (config.format === 'umd') {
        c.output.name = c.output.name || 'VueFormJsonSchema'
        c.output.globals = { vue: 'Vue' }
    }

    if (config.format === 'umd' || config.format === 'cjs') {
        c.output.exports = 'named'
    }

    c.plugins.push(replace({
        __VERSION__: pkg.version,
        __DEV__: config.format !== 'umd' && !config.browser
            ? `(process.env.NODE_ENV !== 'production')`
            : config.env !== 'production'
    }))

    if (config.transpile !== false) {
        c.plugins.push(buble({
            objectAssign: 'Object.assign'
        }))
    }

    c.plugins.push(resolve())
    c.plugins.push(commonjs())

    if (config.minify) {
        c.plugins.push(terser({ module: config.format === 'es' }))
        c.output.sourcemap = true
    }

    return c
}