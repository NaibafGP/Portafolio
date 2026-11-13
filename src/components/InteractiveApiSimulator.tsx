import { useState } from 'react';
import { Play, RotateCcw, ShieldAlert, CheckCircle2, Database } from 'lucide-react';
import { useLanguage } from '../context/languageContext';

interface CatalogProduct {
  id: string;
  nameEs: string;
  nameEn: string;
  stock: number;
  price: number;
}

interface SimulationResult {
  httpStatus: 201 | 400 | 409;
  statusText: string;
  payload: Record<string, unknown>;
  txNoteEs: string;
  txNoteEn: string;
}

const INITIAL_CATALOG: CatalogProduct[] = [
  { id: '1', nameEs: 'Teclado Mecánico Pro', nameEn: 'Mechanical Keyboard Pro', stock: 10, price: 79.99 },
  { id: '2', nameEs: 'Monitor IPS 27"', nameEn: '27" IPS Monitor', stock: 4, price: 249.5 },
];

export function InteractiveApiSimulator() {
  const { lang } = useLanguage();
  const isEs = lang === 'es';

  const [catalog, setCatalog] = useState<CatalogProduct[]>(INITIAL_CATALOG);
  const [selectedId, setSelectedId] = useState<string>('1');
  const [quantity, setQuantity] = useState<number>(2);
  const [rawJsonMode, setRawJsonMode] = useState<boolean>(false);
  const [rawPayload, setRawPayload] = useState<string>('{\n  "productId": "1",\n  "quantity": 2\n}');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [result, setResult] = useState<SimulationResult | null>(null);

  const handleProductChange = (nextId: string) => {
    setSelectedId(nextId);
    setRawPayload(JSON.stringify({ productId: nextId, quantity }, null, 2));
  };

  const handleQuantityChange = (nextQty: number) => {
    setQuantity(nextQty);
    setRawPayload(JSON.stringify({ productId: selectedId, quantity: nextQty }, null, 2));
  };

  const executeTransaction = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    let parsedProductId = selectedId;
    let parsedQuantity = quantity;

    if (rawJsonMode) {
      try {
        const parsed = JSON.parse(rawPayload) as { productId?: unknown; quantity?: unknown };
        parsedProductId = String(parsed.productId ?? '');
        parsedQuantity = Number(parsed.quantity);
      } catch (jsonError) {
        const errMessage = jsonError instanceof Error ? jsonError.message : 'Invalid JSON syntax';
        setResult({
          httpStatus: 400,
          statusText: '400 Bad Request',
          payload: {
            timestamp: new Date().toISOString(),
            status: 400,
            error: 'Bad Request',
            message: isEs
              ? `JSON inválido en el cuerpo de la petición (${errMessage})`
              : `Invalid JSON payload syntax (${errMessage})`,
            path: '/api/v1/orders',
          },
          txNoteEs: 'Rechazado por Jackson antes de entrar a @Transactional Service.',
          txNoteEn: 'Rejected by Jackson parser prior to entering @Transactional Service.',
        });
        setIsSubmitting(false);
        return;
      }
    }

    if (!Number.isFinite(parsedQuantity) || parsedQuantity <= 0 || parsedQuantity < 1) {
      setResult({
        httpStatus: 400,
        statusText: '400 Bad Request',
        payload: {
          timestamp: new Date().toISOString(),
          status: 400,
          error: 'Bad Request',
          message: isEs
            ? 'Validación fallida (@Positive): quantity debe ser >= 1.'
            : 'Validation failed (@Positive): quantity must be >= 1.',
          path: '/api/v1/orders',
        },
        txNoteEs: 'Interceptado por Jakarta Bean Validation (@Valid) y @RestControllerAdvice.',
        txNoteEn: 'Intercepted by Jakarta Bean Validation (@Valid) and @RestControllerAdvice.',
      });
      setIsSubmitting(false);
      return;
    }

    const target = catalog.find((item) => item.id === parsedProductId);
    if (!target) {
      setResult({
        httpStatus: 400,
        statusText: '400 Bad Request',
        payload: {
          timestamp: new Date().toISOString(),
          status: 400,
          error: 'Bad Request',
          message: isEs ? 'Producto no encontrado en el catálogo.' : 'Product not found in catalog.',
          path: '/api/v1/orders',
        },
        txNoteEs: 'Validación de existencia previa a la deducción de stock.',
        txNoteEn: 'Existence check prior to stock deduction.',
      });
      setIsSubmitting(false);
      return;
    }

    if (parsedQuantity > target.stock) {
      setResult({
        httpStatus: 409,
        statusText: '409 Conflict',
        payload: {
          timestamp: new Date().toISOString(),
          status: 409,
          error: 'Conflict',
          message: isEs
            ? `Stock insuficiente (solicitado: ${parsedQuantity}, disponible: ${target.stock}). Rollback ACID ejecutado.`
            : `Insufficient stock (requested: ${parsedQuantity}, available: ${target.stock}). ACID rollback executed.`,
          path: '/api/v1/orders',
        },
        txNoteEs: `Rollback @Transactional: el stock de "${target.nameEs}" permanece intacto en ${target.stock} unidades.`,
        txNoteEn: `@Transactional rollback: stock for "${target.nameEn}" remains unchanged at ${target.stock} units.`,
      });
      setIsSubmitting(false);
      return;
    }

    const remainingStock = target.stock - parsedQuantity;
    setCatalog((prev) =>
      prev.map((item) => (item.id === target.id ? { ...item, stock: remainingStock } : item))
    );

    setResult({
      httpStatus: 201,
      statusText: '201 Created',
      payload: {
        orderId: `ORD-${1040 + remainingStock}`,
        status: 'CONFIRMED',
        productId: target.id,
        quantity: parsedQuantity,
        remainingStock,
        total: Number((target.price * parsedQuantity).toFixed(2)),
        timestamp: new Date().toISOString(),
        path: '/api/v1/orders',
      },
      txNoteEs: `Commit @Transactional exitoso: stock actualizado a ${remainingStock} unidades.`,
      txNoteEn: `@Transactional commit succeeded: remainingStock updated to ${remainingStock} units.`,
    });
    setIsSubmitting(false);
  };

  const resetCatalog = () => {
    setCatalog(INITIAL_CATALOG);
    setSelectedId('1');
    setQuantity(2);
    setRawPayload('{\n  "productId": "1",\n  "quantity": 2\n}');
    setResult(null);
  };

  return (
    <div className="rounded-xl bg-page border border-border p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-accent/15 text-accent font-mono text-xs font-semibold">
            POST
          </span>
          <span className="font-mono text-xs sm:text-sm text-primary font-medium">
            /api/v1/orders
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setRawJsonMode((prev) => !prev)}
            className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            {rawJsonMode ? (isEs ? 'Modo Formulario' : 'Form Mode') : 'JSON Body'}
          </button>

          <button
            type="button"
            onClick={resetCatalog}
            title={isEs ? 'Restablecer stock inicial' : 'Reset initial stock'}
            aria-label={isEs ? 'Restablecer simulador' : 'Reset simulator'}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-accent" />
            <span>{isEs ? 'Restablecer' : 'Reset'}</span>
          </button>
        </div>
      </div>

      {/* Live DB Stock State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {catalog.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface border border-border text-xs"
          >
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="text-primary font-medium">
                {isEs ? item.nameEs : item.nameEn}
              </span>
            </div>
            <span className="font-mono text-secondary">
              stock: <strong className="text-primary">{item.stock}</strong>
            </span>
          </div>
        ))}
      </div>

      {/* Request Controls */}
      {rawJsonMode ? (
        <div>
          <label
            htmlFor="api-sim-raw-json"
            className="block text-xs text-secondary mb-1.5 font-mono"
          >
            Request Body (application/json)
          </label>
          <textarea
            id="api-sim-raw-json"
            rows={4}
            value={rawPayload}
            onChange={(e) => setRawPayload(e.target.value)}
            className="w-full rounded-lg bg-surface border border-border p-3 font-mono text-xs text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
          <div className="sm:col-span-2">
            <label
              htmlFor="api-sim-product"
              className="block text-xs text-secondary mb-1 font-medium"
            >
              {isEs ? 'Producto (Entity ID)' : 'Product (Entity ID)'}
            </label>
            <select
              id="api-sim-product"
              value={selectedId}
              onChange={(e) => handleProductChange(e.target.value)}
              className="w-full rounded-lg bg-surface border border-border px-3 py-2 text-xs text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {catalog.map((item) => (
                <option key={item.id} value={item.id}>
                  #{item.id} — {isEs ? item.nameEs : item.nameEn} (stock: {item.stock})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="api-sim-qty"
              className="block text-xs text-secondary mb-1 font-medium"
            >
              {isEs ? 'Cantidad (quantity)' : 'Quantity'}
            </label>
            <input
              id="api-sim-qty"
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
              className="w-full rounded-lg bg-surface border border-border px-3 py-2 font-mono text-xs text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
          </div>
        </div>
      )}

      {/* Quick Scenario Presets + Execute Trigger */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => {
              setRawJsonMode(false);
              handleProductChange('1');
              handleQuantityChange(2);
            }}
            className="px-2 py-1 rounded bg-surface border border-border text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            {isEs ? 'Caso 201 (2 uds)' : '201 Case (2 units)'}
          </button>
          <button
            type="button"
            onClick={() => {
              setRawJsonMode(false);
              handleProductChange('1');
              handleQuantityChange(99);
            }}
            className="px-2 py-1 rounded bg-surface border border-border text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            {isEs ? 'Caso 409 Rollback (99 uds)' : '409 Rollback (99 units)'}
          </button>
          <button
            type="button"
            onClick={() => {
              setRawJsonMode(false);
              handleProductChange('1');
              handleQuantityChange(0);
            }}
            className="px-2 py-1 rounded bg-surface border border-border text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            {isEs ? 'Caso 400 (0 uds)' : '400 Validation (0 units)'}
          </button>
        </div>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={executeTransaction}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-medium transition-colors cursor-pointer disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5" />
          <span>{isEs ? 'Enviar Petición' : 'Send Request'}</span>
        </button>
      </div>

      {/* Response Output */}
      {result && (
        <div className="rounded-lg bg-surface border border-border p-3.5 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
              {result.httpStatus === 201 ? (
                <CheckCircle2 className="w-4 h-4 text-success" />
              ) : (
                <ShieldAlert className="w-4 h-4 text-accent" />
              )}
              <span>{isEs ? result.txNoteEs : result.txNoteEn}</span>
            </span>

            <span
              className={`px-2 py-0.5 rounded font-mono text-[11px] font-semibold ${
                result.httpStatus === 201
                  ? 'bg-success/15 text-success'
                  : 'bg-accent/15 text-accent'
              }`}
            >
              HTTP {result.statusText}
            </span>
          </div>

          <pre className="p-3 rounded-lg bg-page border border-border font-mono text-[11px] text-secondary overflow-x-auto leading-relaxed">
            {JSON.stringify(result.payload, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default InteractiveApiSimulator;
