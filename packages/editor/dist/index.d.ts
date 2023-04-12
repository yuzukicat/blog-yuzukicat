import { Location, GraphQLSchema, GraphQLError } from 'graphql';
import { IPosition, ContextToken, Diagnostic, IRange, LanguageService } from 'graphql-language-service';
export { getRange } from 'graphql-language-service';
import * as monaco from 'monaco-editor';
import * as react from 'react';
import { ReactElement } from 'react';
import { EditorProps } from '@monaco-editor/react';

declare function removeFalsey<T>(obj: T | null): obj is T;
declare function locToRange(loc: Location): monaco.IRange;
declare const emptyLocation: monaco.IRange;
type BridgeOptions = {
    schema: GraphQLSchema;
    document: string;
    position: IPosition;
    model: monaco.editor.ITextModel;
    token: ContextToken;
    languageService: EnrichedLanguageService;
};
type HoverSource = {
    forNode(options: BridgeOptions): monaco.IMarkdownString | null | Promise<monaco.IMarkdownString | null>;
};
type DiagnosticsSource = {
    forDocument(options: Pick<BridgeOptions, 'document' | 'languageService' | 'model'>): monaco.editor.IMarkerData[] | null | Promise<monaco.editor.IMarkerData[] | null>;
};
declare const coreDiagnosticsSource: DiagnosticsSource;
type DecorationsSource = {
    forDocument(options: Pick<BridgeOptions, 'document' | 'languageService' | 'model'> & {
        editor: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor;
        monaco: typeof monaco;
    }): void | Promise<void>;
};
type DefinitionSource = {
    forNode(options: BridgeOptions): monaco.languages.Definition[] | null | Promise<monaco.languages.Definition[] | null>;
};
declare const coreDefinitionSource: DefinitionSource;
declare const coreHoverSource: HoverSource;
declare const debugHoverSource: HoverSource;
declare function toGraphQLPosition(position: monaco.Position): IPosition;
declare function toMarkerData(diagnostic: Diagnostic): monaco.editor.IMarkerData;
declare function toMonacoRange(range: IRange): monaco.IRange;
type PreviewAction = {
    id: string;
    title: string;
    onOpen: () => HTMLElement;
    onClose: () => void;
};
type EditorAction = {
    id: string;
    label: string;
    keybindings?: number[];
    contextMenuGroupId?: string;
    contextMenuOrder?: number;
    onRun: (options: {
        editor: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor;
        monaco: typeof monaco;
        bridge: BridgeOptions;
    }) => void;
};
declare function showWidgetInPosition(editorInstance: monaco.editor.IStandaloneCodeEditor, position: BridgeOptions['position'], htmlElement: HTMLElement): void;

declare class EnrichedLanguageService extends LanguageService {
    getNodeAtPosition(schema: GraphQLSchema, document: string, position: IPosition): Promise<ContextToken | null>;
    getSchemaSafe(): Promise<GraphQLSchema | null>;
    buildBridgeForProviders(model: monaco.editor.ITextModel, position: monaco.Position): Promise<null | BridgeOptions>;
    getDefinitionProvider(rawSources: DefinitionSource[]): monaco.languages.DefinitionProvider;
    getHoverProvider(rawSources: HoverSource[]): monaco.languages.HoverProvider;
    private handleDecorations;
    private handleDiagnostics;
    getModelChangeHandler(): (editorInstance: monaco.editor.IStandaloneCodeEditor, monacoInstance: typeof monaco, diagnosticsSources: DiagnosticsSource[], decorationsSources: DecorationsSource[]) => void;
    trySchema(sdl: string): Promise<GraphQLSchema | null>;
}

declare const ExecutableDocumentEditor: ({ schema, ...editorProps }: {
    schema: GraphQLSchema;
} & Omit<EditorProps, "language">) => ReactElement;

type SchemaEditorApi = {
    jumpToType(typeName: string): void;
    jumpToField(typeName: string, fieldName: string): void;
    deselect(): void;
};
type SchemaServicesOptions = {
    schema?: string;
    hoverProviders?: HoverSource[];
    definitionProviders?: DefinitionSource[];
    diagnosticsProviders?: DiagnosticsSource[];
    decorationsProviders?: DecorationsSource[];
    actions?: EditorAction[];
    onBlur?: (value: string) => void;
    onLanguageServiceReady?: (languageService: EnrichedLanguageService) => void;
    onSchemaChange?: (schema: GraphQLSchema, sdl: string) => void;
    onSchemaError?: (errors: [GraphQLError], sdl: string, languageService: EnrichedLanguageService) => void;
    sharedLanguageService?: EnrichedLanguageService;
    keyboardShortcuts?: (editorInstance: monaco.editor.IStandaloneCodeEditor, monacoInstance: typeof monaco) => monaco.editor.IActionDescriptor[];
};

type SchemaEditorProps = SchemaServicesOptions & {
    onBlur?: (value: string) => void;
    onLanguageServiceReady?: (languageService: EnrichedLanguageService) => void;
    onSchemaChange?: (schema: GraphQLSchema, sdl: string) => void;
    onSchemaError?: (errors: [GraphQLError], sdl: string, languageService: EnrichedLanguageService) => void;
} & Omit<EditorProps, 'language'>;
declare const SchemaEditor: react.ForwardRefExoticComponent<SchemaServicesOptions & {
    onBlur?: ((value: string) => void) | undefined;
    onLanguageServiceReady?: ((languageService: EnrichedLanguageService) => void) | undefined;
    onSchemaChange?: ((schema: GraphQLSchema, sdl: string) => void) | undefined;
    onSchemaError?: ((errors: [GraphQLError], sdl: string, languageService: EnrichedLanguageService) => void) | undefined;
} & Omit<EditorProps, "language"> & react.RefAttributes<SchemaEditorApi>>;

export { BridgeOptions, DecorationsSource, DefinitionSource, DiagnosticsSource, EditorAction, EnrichedLanguageService, ExecutableDocumentEditor, HoverSource, PreviewAction, SchemaEditor, SchemaEditorProps, coreDefinitionSource, coreDiagnosticsSource, coreHoverSource, debugHoverSource, emptyLocation, locToRange, removeFalsey, showWidgetInPosition, toGraphQLPosition, toMarkerData, toMonacoRange };
