<main>
    <div class="hola">
        <div class="box-body">
            <?php if (count($reporte)>0): ?>
                <table class="table table-bordered table-hover">
                <thead id="cabe">
                    <th>Suma por mes</th>
                </thead>   
            <tr>
            <td><?php 
                $apostadoSuma = pagoData::sumar("valor");
                echo $apostadoSuma->suma;?>
            </td>                      
            </tr>   
            </table>
            <?php else: ?>
                <p class="alert alert-warning">No Se Encontraron Datos</p>
            <?php endif; ?>

        </div>
    </div>
</main>