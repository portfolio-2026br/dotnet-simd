// ################################################################################
//  Copyright (c) 2026  Claudio André <portfolio-2026br at claudioandre.slmail.me>
//              ___                _      ___       _
//             (  _`\             ( )_  /'___)     (_ )  _
//             | |_) )  _    _ __ | ,_)| (__   _    | | (_)   _
//             | ,__/'/'_`\ ( '__)| |  | ,__)/'_`\  | | | | /'_`\
//             | |   ( (_) )| |   | |_ | |  ( (_) ) | | | |( (_) )
//             (_)   `\___/'(_)   `\__)(_)  `\___/'(___)(_)`\___/'
//
// This program comes with ABSOLUTELY NO WARRANTY; express or implied.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, as expressed in version 2, seen at
// https://www.gnu.org/licenses/gpl-2.0.html
// ################################################################################
// Estudo de caso sobre o uso de SIMD com .NET
// More info at https://github.com/portfolio-2026br/dotnet-simd

using System.Numerics;
using System.Runtime.InteropServices;
using System.Runtime.Intrinsics;
using System.Runtime.Intrinsics.X86;

using BenchmarkDotNet.Attributes;

namespace SIMDPerformance
{
    [MemoryDiagnoser]
    public class SIMDAVX2Performance
    {
        // (12345 * Vector256<int>.Count);
        private const int ITEMS = 12345 * 8;
        private static int[] left = new int[ITEMS];
        private static int[] right = new int[ITEMS];
        private static int[] resultado = new int[ITEMS];

        [GlobalSetup]
        public void GlobalSetup()
        {
            //Inicialização dos arrays
            for (int i = 0; i < ITEMS; i++)
            {
                left[i] = i;
                right[i] = i + Environment.Version.Major;
            }
        }

        [Benchmark]
        public void SimplesSomaArray()
        {
            // O processador está somando 1 (UM) inteiro por vez
            for (int i = 0; i < left.Length; i++)
                resultado[i] = left[i] + right[i];
        }

        [Benchmark(Baseline = true)]
        public void SIMDSomaArray()
        {
            Span<Vector256<int>> leftVectors =
                MemoryMarshal.Cast<int, Vector256<int>>(left);
            Span<Vector256<int>> rightVectors =
                MemoryMarshal.Cast<int, Vector256<int>>(right);
            Span<Vector256<int>> outputVectors =
                MemoryMarshal.Cast<int, Vector256<int>>(resultado);

            // O processador está somando 8 (OITO) inteiros de uma vez
            for (int i = 0; i < leftVectors.Length; i++)
                outputVectors[i] =
                    Avx2.Add(leftVectors[i], rightVectors[i]);
        }
    }
}